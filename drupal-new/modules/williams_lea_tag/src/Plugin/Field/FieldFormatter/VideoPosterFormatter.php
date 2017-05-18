<?php

/**
 * @file
 * Contains \Drupal\williams_lea_tag\Plugin\Field\FieldFormatter\VideoPosterFormatter.
 */

namespace Drupal\williams_lea_tag\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Link;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Cache\Cache;
use Drupal\video\Plugin\Field\FieldFormatter\VideoPlayerFormatter;

/**
 * Plugin implementation of the 'video_poster_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "video_poster_formatter",
 *   label = @Translation("HTML5 Video Player with poster"),
 *   field_types = {
 *     "video"
 *   }
 * )
 */

class VideoPosterFormatter extends VideoPlayerFormatter implements ContainerFactoryPluginInterface {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = array();
    $files = $this->getEntitiesToView($items, $langcode);

    // Early opt-out if the field is empty.
    if (empty($files)) {
      return $elements;
    }

    // Collect cache tags to be added for each item in the field.
    $media_types = array(
      'ogg' => 'video/ogg',
      'ogv' => 'video/ogg',
      'mp4' => 'video/mp4',
      'webm' => 'video/webm'
    );
    $video_items = array();
    $poster = NULL;
    foreach ($files as $delta => $file) {
      $file_uri = $file->getFileUri();
      $ext = pathinfo($file_uri, PATHINFO_EXTENSION);
      // If it's an image, make it a poster.
      if (in_array($ext, array('gif', 'jpg', 'jpeg', 'png'))) {
        $poster = Url::fromUri(file_create_url($file_uri));
      }
      else {
        $video_items[] = array(
          'type' => isset($media_types[$ext]) ? $media_types[$ext] : '',
          'src' => Url::fromUri(file_create_url($file_uri))
        );
      }
    }
    $elements[] = array(
      '#theme' => 'video_poster_formatter',
      '#items' => $video_items,
      '#poster' => $poster,
      '#player_attributes' => $this->getSettings(),
    );
    return $elements;
  }
  
  /**
   * {@inheritdoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    if(empty($field_definition->getTargetBundle()) && $field_definition->isList()){
      return TRUE;
    }
    else{
      $entity_form_display = entity_get_form_display($field_definition->getTargetEntityTypeId(), $field_definition->getTargetBundle(), 'default');
      $widget = $entity_form_display->getRenderer($field_definition->getName());
      $widget_id = $widget->getBaseId();
      if($field_definition->isList() && $widget_id == 'video_upload'){
        return TRUE;
      }
    }
    return FALSE;
  }
}