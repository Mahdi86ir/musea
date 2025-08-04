import React, { useState } from 'react'
import style from './style.module.css'
import Navbar from '../../Components/Navbar'
import Honors from '../../Components/Honors'
import OtherWorks from '../../Components/OtherWorks'
import Arts from '../../Components/Arts'
import InstaPosts from '../../Components/InstaPosts'

export default function Home() {
  const [imgsContainer , setImgsContainer] = useState({
    container1:[
      "/assets/images/1f.png",
      "/assets/images/2f.png",
      "/assets/images/3f.png",
      "/assets/images/4f.png",
      "/assets/images/1.png",
      "/assets/images/2.png",
      "/assets/images/3.png",
      "/assets/images/4.png",
      "/assets/images/5.png",
      "/assets/images/6.png",
      "/assets/images/7.png",
      "/assets/images/8.png",
    ],
    container2:[
      "/assets/images/9.png",
      "/assets/images/10.png",
      "/assets/images/11.png",
      "/assets/images/12.png",
      "/assets/images/13.png",
      "/assets/images/14.png",
      "/assets/images/15.png",
      "/assets/images/16.png",
      "/assets/images/17.png",
      "/assets/images/18.png",
      "/assets/images/19.png",
      "/assets/images/20.png",
    ],
    container3:[
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
      "/assets/images/art1_c1.png",
    ],

  })
  return (
    <>
      <section className={style.header_container}>
      <div className={style.header_content}>
        <h1>
          به وب سایت رسمی همایون (رضا) توسلی زاده خوش آمدید.
        </h1>
        <p>
همایون (رضا)   توسلی زاده  متولد:۱۳۸۳/۵/۱
از شهر مشهد،ساکن شیراز است.        </p>
        <p>
او هم اکنون دانشجوی هنر در رشته نقاشی شیراز می باشد.        </p>
        <p>
وی از هنرمندان جوان،مستعدوپرتلاش در عرصه مجسمه سازی است.        </p>
        <p>
          ودر کنار تحصیل دانشگاهی، مسیر حرفه ای خود را در زمینه مجسمه سازی نزد استادعباس دلاور
        </p>
        <p>یکی از چهره های برجسته این حوزه،بصورت
عملی به یادگیری تکنیک ها و فنون پیشرفته
گذرانده است.</p>
        <p>حوزه ی فعالیت او در ساخت مجسمه های: <br />
        حیوانات،مفهومی،طراحی و ساخت المان های
هنری در ابعاد بزرگ
در قالب متریال هایی همچون قایبرگلاس،
فلز و آهن میباشد.</p>
        <p>
          وی تاکنون در پروژه های متعددی بصورت
انفرادی و گروهی مشارکت داشته است،
        </p>
        <p>از جمله همکاری با شهرداری ها،سازمان ها
و نهادهای دولتی و خصوصی
برای ساخت آثارهنری در فضاهای شهری
و عمومی</p>
        <p>
تخصص همایون در خلق مجسمه های حجمی
نمادهای فرهنگی و مفاهیم زیباشناختی
موجب شده تا آثارش مورد توجه طیف
گسترده ای از مخاطبان و کارفرمایان قرارگیرد.        </p>
        <p>
پذیرش و آموزش ساخت مجسمه سازی
قالب گیری سیلیکون و فایبرگلاس
تولید و تکثیر فایبرگلاس        </p>
        </div>
      </section>
      <Honors/>
      <OtherWorks/>
      <Arts imgsContainer={imgsContainer.container1}/>
      <Arts imgsContainer={imgsContainer.container2}/>
      {/* <Arts imgsContainer={imgsContainer.container3}/> */}
      {/* <InstaPosts/> */}
    </>
  )
}
