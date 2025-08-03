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
    container2:[
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
          به وب سایت رسمی همایون توسلی زاده خوش آمدید.
        </h1>
        <p>
            همایون توسلی زاده متولد 1383/5/1 از شهر مشهد، ساکن شیراز است.
        </p>
        <p>
            او هم اکنون دانشجوی هنر در رشته نقاشی می باشد.
        </p>
        <p>
            او شاگرد یکی از اساتید برجسته این حوزه بنام عباس دلاور بود.
        </p>
        <p>
            حوزه فعالیت او در ساخت مجسمه های حیوانات، مفهومی و طراحی المان های هنری در ابعاد بزرگ در قالب متریال هایی همچون فایبر کلاس و فلز می باشد.
        </p>
        <p>
            وی تا کنون در پروژه های متعددی به صورت انفرادی و گروهی مشارکت داشته است.
        </p>
        <p>
            از جمله همکاری با شهرداریها، ...... و نهاد های دولتی و خصوصی بری طراحی و ساخت آثار هنری در فضا های شهری و عمومی است.
        </p>
        <p>
            تخصص او در خلق مجسمه های جمعی و نماد های فرهنگی موجب شده تا آثارش مورد توجه طیف گسترده ای از مخاطبان و کارفرمایان قرار گیرد.
        </p>
        <p>
            پذیرش و آموزش مجسمه سازی، قالب گیری سیلیکون و فایبر کلاس ، تولید و تکثیر فایبر کلاس
        </p>
        </div>
      </section>
      <Honors/>
      <OtherWorks/>
      <Arts imgsContainer={imgsContainer.container1}/>
      <Arts imgsContainer={imgsContainer.container2}/>
      <Arts imgsContainer={imgsContainer.container3}/>
      <InstaPosts/>
    </>
  )
}
