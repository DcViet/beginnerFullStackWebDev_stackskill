Cài đặt trên Linux
Nếu bạn muốn cài đặt các công cụ Git cơ bản trên Linux thông qua dòng lệnh:

Nếu bạn đang sử dụng bản phân phối dựa trên Debian, mình đang dùng Debian 12 và kali, apt:

$ sudo apt install git-all

Để có thêm tùy chọn,xem hướng dẫn cài đặt trên một số bản phân phối Unix khác: https://git-scm.com/download/linux.

Cài đặt trên macOS
Đơn giản nhất là cài đặt Xcode Command Line Tools. Trên Mavericks (10.9) trở lên, bạn có thể làm điều này đơn giản bằng cách cố gắng chạy git từ Terminal ngay lần đầu tiên.

$ git --version
Nếu bạn chưa cài đặt nó, nó sẽ nhắc bạn cài đặt nó.

Nếu bạn muốn có phiên bản cập nhật hơn, bạn cũng có thể cài đặt nó thông qua dòng lệnh. Trình cài đặt macOS Git: https://git-scm.com/download/mac.

Đăng nhập tài khoản của bạn.
Điều đầu tiên bạn nên làm khi cài đặt Git là nhập tên người dùng và địa chỉ email của bạn. Điều này rất quan trọng vì mọi commit Git đều sử dụng thông tin này và nó được đưa vào các commit mà bạn tạo:

$ git config --global user.name "DcViet"
$ git config --global user.email tranducviet@example.com

bạn chỉ cần làm điều này một lần nếu bạn thành công chỉnh sửa ---global, bởi vì sau đó Git sẽ luôn sử dụng thông tin đó cho bất cứ điều gì bạn làm trên hệ thống. Nếu bạn muốn ghi đè điều này bằng một tên hoặc địa chỉ email khác cho các dự án cụ thể, bạn có thể chạy lệnh mà không có tùy chọn ---global khi bạn đang ở trong dự án đó.

Ở đây mình sử dụng Vim, bạn có thể sử dụng các trình soạn thảo khác hoặc những Công cụ GUI hỗ trợ.
Tên chi nhánh mặc định của bạn
Mặc định Git sẽ tạo một branch gọi là master khi bạn tạo mới một repository với git init. Từ Git phiên bản 2.28 trở đi, bạn có thể đặt tên khác cho nhánh ban đầu.

Để đặt chính làm tên nhánh mặc định, hãy làm:

$ git config --global init.defaultBranch main

Kiểm tra cài đặt của bạn
Nếu bạn muốn kiểm tra cài đặt cấu hình của mình, bạn có thể sử dụng lệnh git config --list để liệt kê tất cả các cài đặt mà Git có thể tìm thấy tại thời điểm đó:

$ git config --list
user.name=DcViet
user.email=tranducviet@example.com
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...


Bạn cũng có thể kiểm tra xem Git nghĩ giá trị của một khóa cụ thể là gì bằng cách gõ git config <key>:

$ git config user.name
DcViet

2.1 Khái niệm cơ bản về Git - Nhận kho lưu trữ Git

sau phần cài đặt thì chúng ta đến phần quan trọng: sử dụng git

Lấy kho lưu trữ Git
Bạn thường lấy kho lưu trữ Git (repo) theo một trong hai cách:

Bạn có thể lấy một thư mục cục bộ hiện không nằm dưới sự kiểm soát phiên bản và biến nó thành kho lưu trữ Git hoặc

Bạn có thể sao chép một kho lưu trữ Git hiện có từ nơi khác.

Trong cả hai trường hợp, bạn sẽ sử dụng được kho git trên máy cục bộ của mình và sẵn sàng cho công việc.

Khởi tạo kho lưu trữ trong thư mục hiện có.
Nếu bạn có một thư mục dự án hiện không nằm dưới sự kiểm soát phiên bản nào và bạn muốn bắt đầu kiểm soát nó bằng Git, trước tiên bạn cần vào thư mục của dự án đó. Nếu bạn chưa bao giờ làm điều này, nó trông hơi khác một chút tùy thuộc vào hệ thống bạn đang chạy:

đối với Linux:
$ cd /home/user/my_project
Đối với macOS:
$ cd /Users/user/my_project

và lệnh:

$ git init

Điều này tạo ra một thư mục con mới có tên .git chứa tất cả các tệp kho lưu trữ cần thiết của bạn - một bộ xương kho lưu trữ .git 

Nếu bạn muốn bắt đầu kiểm soát phiên bản các tệp hiện có (trái ngược với một thư mục trống), có lẽ bạn nên bắt đầu theo dõi các tệp đó và thực hiện cam kết ban đầu. Bạn có thể thực hiện điều đó với một vài git add chỉ định các tệp bạn muốn theo dõi, theo sau là git commit:

$ git add *.c
$ git add LICENSE
$ git commit -m 'Initial project version'
Chúng ta sẽ xem xét những gì các lệnh này làm chỉ trong một phút. Tại thời điểm này, bạn có một kho lưu trữ Git với các tệp được theo dõi và cam kết ban đầu.

Nhân bản kho lưu trữ hiện có
Nếu bạn muốn lấy một bản sao của kho lưu trữ Git hiện có - ví dụ: một dự án bạn muốn đóng góp - lệnh bạn cần là git clone. Nếu bạn đã quen thuộc với các VCS khác như Subversion, bạn sẽ nhận thấy rằng lệnh là "clone" chứ không phải "checkout". Đây là một sự khác biệt quan trọng – thay vì chỉ nhận được một bản sao hoạt động, Git nhận được một bản sao đầy đủ của gần như tất cả dữ liệu mà máy chủ có. Mỗi phiên bản của mọi tệp cho lịch sử của dự án được kéo xuống theo mặc định khi bạn chạy git clone. Trên thực tế, nếu đĩa máy chủ của bạn bị hỏng, bạn thường có thể sử dụng gần như bất kỳ bản sao nào trên bất kỳ máy khách nào để đặt máy chủ trở lại trạng thái khi nó được sao chép (bạn có thể mất một số móc phía máy chủ và như vậy, nhưng tất cả dữ liệu phiên bản sẽ ở đó - xem Lấy Git trên Máy chủ để biết thêm chi tiết).

Bạn clone một repository với git clone <url>. Ví dụ: nếu bạn muốn sao chép thư viện có thể liên kết Git được gọi là libgit2, bạn có thể làm như sau:

$ git clone https://github.com/libgit2/libgit2
Điều đó tạo ra một thư mục có tên libgit2, khởi tạo một thư mục ..git bên trong nó, kéo xuống tất cả dữ liệu cho kho lưu trữ đó và kiểm tra một bản sao hoạt động của phiên bản mới nhất. Nếu bạn đi vào thư mục libgit2 mới vừa được tạo, bạn sẽ thấy các tệp dự án trong đó, sẵn sàng để làm việc hoặc sử dụng.

Nếu bạn muốn sao chép kho lưu trữ vào một thư mục có tên khác với libgit2, bạn có thể chỉ định tên thư mục mới làm đối số bổ sung:

$ git clone https://github.com/libgit2/libgit2 mylibgit
Lệnh đó thực hiện tương tự như lệnh trước, nhưng thư mục đích được gọi là mylibgit.

Git có một số giao thức truyền khác nhau mà bạn có thể sử dụng. Ví dụ trước sử dụng giao thức https://, nhưng bạn cũng có thể thấy git:// hoặc user@server:path/to/repo.git, sử dụng giao thức truyền SSH. Bắt Git trên Máy chủ sẽ giới thiệu tất cả các tùy chọn có sẵn mà máy chủ có thể thiết lập để truy cập kho lưu trữ Git của bạn và ưu và nhược điểm của từng tùy chọn.