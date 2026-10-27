恋爱纪念网站｜使用说明

文件：
- index.html：网页内容
- style.css：视觉样式
- script.js：恋爱计时、情书和惊喜互动
- images/：放你们的照片

1. 修改恋爱开始日期
打开 script.js，找到：
const RELATIONSHIP_START = new Date(2026, 5, 29);
改成你们正式确定关系的日期。注意：月份从 0 开始计数：
1月=0，2月=1，3月=2，4月=3，5月=4，6月=5，7月=6，8月=7，9月=8，10月=9，11月=10，12月=11。
例如 2026年7月3日写成 new Date(2026, 6, 3)。

2. 添加照片
把三张照片放入 images 文件夹，文件名分别改成：
photo1.jpg
photo2.jpg
photo3.jpg
建议用 JPG 或 WebP 图片，并尽量选择你们都愿意放进纪念网站的照片。若照片格式是 PNG，请将 index.html 对应的文件名也改为 photo1.png 等。

3. 如何预览
在电脑上双击 index.html 即可用浏览器打开。手机本地预览可能受文件访问限制，发布到网页托管平台后更方便。

4. 发布上线（无需自己购买服务器）
可以使用 GitHub Pages：
- 登录 GitHub 并新建一个 public repository。
- 上传 index.html、style.css、script.js 和 images 文件夹中的照片。
- 打开仓库 Settings → Pages。
- 在 Build and deployment 中选择 Deploy from a branch，Branch 选择 main，文件夹选择 /(root)，保存。
- 等待发布完成，页面会提供网站地址。

注意：
- 网站目前使用网络字体；无网络时会自动使用备用字体。
- 这是静态网页，不会收集或保存访客提交的数据。
- 现在的恋爱开始日期是临时默认值，请上线前确认并修改。
