# OpenCV入门教程
作者：于仕琪

### 一、终端运行：
1. 程序名 参数列表
hello.exe a b c d e
1. 常见编译错误
第一件事要阅读出错信息
    1. 找不到头文件
    1. 拼写错误
    1. 运行时错误

### 二、OpenCV协议
> 采用BSD协议

### 三、图像的基本操作
#### 3-1 图像的表示
灰度图用2维矩阵表示(MxN)
彩色图用3维矩阵表示(MxNx3)
#### 3-2 Mat类
早期的OpenCV中，使用IplImage和CvMat数据结构来表示图像，它们都是C语言的结构。使用者两个结构的问题是内存需要手动管理，开发者必须清楚何时申请、释放内存。
新版的OpenCV引入了Mat类，可以自动管理内存。
#### 3-3 创建Mat对象
Mat是一个非常优秀的图像类，它同时也是一个通用的矩阵，可以用来创建和操作多维矩阵。
3-3-1 构造函数方法
```javascript
Mat M(3,2,CV_8UC3,Scalar(0,0,255));//创建一个（行数）高度为3，列数（宽度）为2的图像，图像元素是8位无符号整数类型，且有3个通道。图像的所有像素被初始化为（0，0，255）。OpenCV的颜色顺序是BGR，因此这是一个全红色的图像。
cout << "M = " << endl << " " << M << endl;//输出Mat类的实例M的所有像素值。Mat重定义了<<操作符，使用这个操作符可以方便的输出所有像素值，而不需要使用for循环输出。
```
type可以是CV_8UC1,CV_16SC1:
8U表示8位无符号整数
16S表示16位有符号整数
64F表示64位浮点数
C后面表示通道数
C1表示一个通道
C4表示四个通道
```javascript
Mat M(3,2,CV_8UC(5));//创建行数为3，列数为2，通道数为5的图像
```
3-3-2 create()函数创建对象
```javascript
Mat M(2,2,CV_8UC3);//构造函数创建图像
M.create(3,2,CV_8UC2);//释放内存重新创建图像
3-3-3 Matlab风格的创建对象方法
Mat Z = Mat::zeros(2,3,CV_8UC1);
cout << "Z = " << endl << " " << Z << endl;
```
3-3-4矩阵的基本元素表达
> OpenCV中有模版类Vec，可以表示一个向量。Vec类预定义了一些小向量。
```javascript
typedef Vec<uchar, 2> Vec2b;
typedef Vec<uchar, 3> Vec3b;
typedef Vec<uchar, 4> Vec4b;

typedef Vec<short, 2> Vec2s;
typedef Vec<short, 3> Vec3s;
typedef Vec<short, 4> Vec4s;

typedef Vec<int, 2> Vec2i;
typedef Vec<int, 3> Vec3i;
typedef Vec<int, 4> Vec4i;

typedef Vec<float, 2> Vec2f;
typedef Vec<float, 3> Vec3f;
typedef Vec<float, 4> Vec4f;
typedef Vec<float, 6> Vec6f;

typedef Vec<double, 2> Vec2d;
typedef Vec<double, 3> Vec3d;
typedef Vec<double, 4> Vec4d;
typedef Vec<double, 6> Vec6d;

例如：8U类型的RGB彩色图可以使用Vec3b，3通道float类型的矩形可以使用Vec3f。
Vec3b color;//用color变量描述一种RGB颜色
color[0] = 255;//B分量
color[1] = 255;//G分量
color[2] = 0;//R分量
```
#### 3-5-1 at()函数
```javascript
uchar value = grayim.at<uchar>(i,j);//读出第i行第j列像素值
grayim.at<uchar>(i,j)=128;//将第i行第j列像素值设置为128
```
3-5-2 使用迭代器
3-5-3 通过数据指针
C/C++中的指针操作是不进行类型以及越界检查的，如果指针访问出错，程序运行时有可能突然出现（segment fault）


#### 3-6 选取图像局部区域
3-6-1 单行或单列选择
```javascript
Mat Mat::row(int i) const
Mat Mat::col(int j) const
Eg.
Mat line = A.row(i);
A.row(j) = A.row(i)*2;//取出A矩阵的第i行，将这一行的所有元素都乘2，然后赋值给第j行
3-6-2 用Range选择多行或多列
//创建一个单位阵
Mat A = Mat::eye(10, 10, CV_32S);
//提取第1到3列（不包括3）
Mat B = A(Range::all(), Range(1, 3));
//提取B的第5至9行（不包括9）
//其实等价于
C = A(Range(5, 9), Range(1, 3))
Mat C = B(Range(5, 9), Range::all())
```
#### 3-7 Mat表达式
#### 3-8 Mat类
#### 3-9 Mat类的内存管理
Mat类有两部分组成：矩阵头，指针(指向存储所有像素值的矩阵)
[矩阵数据][引用数据]

#### 3-10 输出
#### 3-11 Mat与IplImage和Cvmat的转换

### 四、数据获取与存储
#### 4-1 读写图像文件
```javascript
imread() //将图像文件读入内存 BMP,JPEG,JPG,PNG,PBM,RAS,TIFF,EXR,jp2
imwrite() //将Mat对象以图像文件格式写入内存
Mat imread(const string& filename, int flags=1 )
```
#### 4-2 读写视频















