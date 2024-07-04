# Tugas Akhir

untuk dapat lulus pada diperuntukan untuk membuat sebuah tugas "**Bookshelf API**" 

sesuai dengan kriteria yang diperlukan




## Kriteria
___Tugas akhir ini memiliki beberapa kriteria yang harus dimiliki yaitu:___

=========================================================================
> Kriteria 1 : Aplikasi menggunakan port 9000.
> Kriteria 2 : Aplikasi dijalankan dengan perintah npm run start.
> Kriteria 3 : API dapat menyimpan buku.
> Kriteria 4 : API dapat menampilkan seluruh buku.
> Kriteria 5 : API dapat menampilkan detail buku.
> Kriteria 6 : API dapat mengubah data buku.
> Kriteria 7 : API dapat menghapus buku.

========================================================================

## POST
![Screenshot 2024-07-04 230036](https://github.com/wraleydi/Bookshelf-API/assets/166751493/72bfceac-240a-42d5-bf0a-e550d2899bf6)

## GET
![Screenshot 2024-07-04 230217](https://github.com/wraleydi/Bookshelf-API/assets/166751493/edd5fcb5-211b-4f5f-9a8a-705305d95c02)

## PUT
![Screenshot 2024-07-04 230430](https://github.com/wraleydi/Bookshelf-API/assets/166751493/07016073-6515-4186-b3fb-0a1013434307)

## DELETE
![Screenshot 2024-07-04 230534](https://github.com/wraleydi/Bookshelf-API/assets/166751493/8c435151-4794-4710-b942-ec23518787f0)


# Query Parameters
dengan beberapa tambahan fitur query 

## query parameters
 - ?name
 - ?reading
 - ?finished

## Contoh
**?name parameter**:
menampilkan seluruh buku yang mengandung nama berdasarkan nilai yang diberikan pada query ini. Contoh /books?name=”budi”, maka akan menampilkan daftar buku yang mengandung nama “budi” secara non-case sensitive  (tidak peduli besar dan kecil huruf).

_url_
~~~
http://localhost:9000/books?name=budi
~~~

**?reading parameter**:
Bernilai 0 atau 1. Bila 0, maka tampilkan buku yang sedang tidak dibaca (reading: false). Bila 1, maka tampilkan buku yang sedang dibaca (reading: true).

_url_
~~~
http://localhost:9000/books?reading=0
~~~
~~~
http://localhost:9000/books?reading=1
~~~

**?finished parameter**:
Bernilai 0 atau 1. Bila 0, maka tampilkan buku yang sudah belum selesai dibaca (finished: false). Bila 1, maka tampilkan buku yang sudah selesai dibaca (finished: true).

_url_
~~~
http://localhost:9000/books?finished=0
~~~
~~~
http://localhost:9000/books?finished=1
~~~
