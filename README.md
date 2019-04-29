Open Source Snake 360
======================
Open Source Snake 360 adalah sebuah permainan di mana pemain mengendalikan ular untuk mendapatkan makanan sebanyak-banyaknya tanpa menabrak dinding atau tubuh ular itu sendiri. Pada Open Source Snake 360, ular dapat bergerak 360° dan Anda dapat menambahkan labirin buatan sendiri untuk menambah variasi labirin yang ada.

## Kontrol bermain
* Desktop
  - tombol <- : menggerakan ular berlawanan arah jarum jam
  - tombol -> : menggerakan ular searah jarum jam
* Smartphone 
  - menekan bagian kiri layar : menggerakan ular berlawanan arah jarum jam
  - menekan bagian kanan layar : menggerakan ular searah jarum jam
  
## Cara menambah labirin
Berikut adalah cara untuk menambah labirin :
1. Fork dan clone repository ini
2. Sinkronkan repository fork yang Anda buat dengan repository aslinya(repository ini). Caranya adalah dengan menuliskan perintah : ```$ git remote add upstream https://github.com/GeneralDevilX/Snake360/``` kemudian gunakan ```$ git fetch upstream``` untuk mengambil repo asli
3. Checkout ke branch utama dan merge repo Anda dengan branch upstream yang sudah Anda tambahkan
4. Buat labirin (aturan pembuatan labirin sudah dijelaskan di bawah)
5. Commit dan push perubahan pada repository yang sudah Anda fork
6. Buat pull request ke repository ini

**Note : Untuk point 2 dan 3 harus dilakukan apabila Anda ingin update repo Anda dengan repo ini**

## Membuat labirin
Berikut adalah hal yang perlu diperhatikan untuk membuat labirin : 
* File labirin diawali dengan 'level' kemudian diikuti dengan angka. Angka yang digunakan adalah angka dari level terbaru. Misal : bila labirin terakhir adalah "level3.txt", maka labirin baru akan bernama "level4.txt"
* File level dibuat pada folder bernama 'Levels'
* Labirin dibuat pada file text (.txt)
* Labirin dibuat dengan dimensi 60 x 60. File text memiliki 60 baris dan setiap barisnya memiliki 60 karakter
* Karakter '#' merepresentasikan dinding dan karakter '-' merepresentasikan tidak ada dinding
* Baris terakhir diisi dengan posisi awal ular yaitu koordinat X ular dan koordinat Y ular yang keduanya dipisahkan oleh spasi (koordinat minimal untuk X dan Y adalah 0 dan koordinat maksimal untuk X dan Y adalah 600). Contoh: apabila posisi ular adalah (100,200) maka Anda harus mengganti karakter ke 10 dari baris ke 20.
* Tidak boleh ada space kosong di akhir file teks
