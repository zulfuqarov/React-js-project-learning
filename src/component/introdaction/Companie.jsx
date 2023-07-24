import React, { useEffect, useState } from 'react';
import Companies from './companies';
import axios from 'axios';

const Companie = () => {
  const [sirketler, setSirketler] = useState([]);

  useEffect(() => {
    axios.get('https://64b929f879b7c9def6c0ad9a.mockapi.io/companies/img/nebi')
      .then(response => setSirketler(response.data))
      .catch(error => {
        console.error('API isteği başarısız:', error);
      });
  }, []);

  // Kendi resim URL'leriniz
  const myImgURLs = [
    " https://th.bing.com/th/id/OIP.TyZDfzfnDNS-fqB2cgJEwwHaEo?pid=ImgDet&rs=1",
    "https://th.bing.com/th/id/OIP.9aZKn8KgICbKftW8so832AAAAA?pid=ImgDet&w=240&h=255&rs=1 ",
    " https://i.pinimg.com/474x/e2/9c/52/e29c529d1abafcb102bda307a9e1701f.jpg",
    "https://th.bing.com/th/id/OIP.Ltbi9B4g5nL8TCtU0EflOQHaLI?pid=ImgDet&w=2832&h=4256&rs=1 ",
    // Dilediğiniz kadar farklı resim URL'si ekleyebilirsiniz
  ];

  useEffect(() => {
    if (sirketler.length > 0) {
      // Şirketlerin resim URL'lerini sırasıyla kendi resim URL'lerinizle değiştirmek için yeni bir dizi oluşturun
      const updatedSirketler = sirketler.map((sirket, index) => {
        const imgIndex = index % myImgURLs.length; // Şirketlerin sayısına göre "myImgURLs" dizisini döngülemek için
        const imgURL = myImgURLs[imgIndex];
        return {
          ...sirket,
          imgs: imgURL
        };
      });
      setSirketler(updatedSirketler);
    }
  }, [sirketler]);

  return (
    <div className='row'>
      {sirketler && sirketler.map(birsirket => (
        <Companies key={birsirket.id} siranomreleri={birsirket.id} sirketinsekili={birsirket.imgs} />
      ))}
    </div>
  );
};

export default Companie;
