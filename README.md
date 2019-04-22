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
* Fork repository ini
* Buat labirin (aturan pembuatan labirin sudah dijelaskan di bawah)
* Commit dan push perubahan pada repository yang sudah Anda fork
* Buat pull request ke repository ini

## Membuat labirin
Berikut adalah hal yang perlu diperhatikan untuk membuat labirin : 
* File level dibuat pada folder bernama 'Levels'
* Labirin dibuat pada file text (.txt)
* Labirin dibuat dengan dimensi 60 x 60. File text memiliki 60 baris dan setiap barisnya memiliki 60 karakter
* Karakter '#' merepresentasikan dinding dan karakter '-' merepresentasikan tidak ada dinding
* Baris terakhir diisi dengan posisi awal ular yaitu koordinat X ular dan koordinat Y ular yang keduanya dipisahkan oleh spasi (koordinat minimal untuk X dan Y adalah 0 dan koordinat maksimal untuk X dan Y adalah 600)
