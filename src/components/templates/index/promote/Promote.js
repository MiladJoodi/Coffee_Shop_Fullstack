import Link from "next/link";
import styles from "./promote.module.css";

const Promote = () => {
  return (
    <div className={styles.readable}>
      <div data-aos="fade-up-right" className={styles.container}>
        <main className={styles.main}>
          <section>
            <span>خرید قهوه ، به سبک حرفه ای ها</span>
            <p>زیبایی امروز رو با قهوه “ست” کنید</p>
            <img data-aos="fade-left" src="/images/coffee-image-1.jpg" alt="" />
          </section>
          <section className={styles.club}>
            <div>
              <span>باشگاه مشتریان ست</span>
              <p>برای مشتریان وفادار قهوه ست</p>
            </div>
          </section>
        </main>
        <main className={styles.main}>
          <img width={660} height={530} src="/images/Home32.jpg" alt="" />
          <section data-aos="fade-up" className={styles.why_coffee}>
            <img
              className={styles.logo}
              src="/images/coffee-svg-2.svg"
              alt=""
            />
            <p className={styles.title}>چرا قهوه ست</p>
            <p>
              برخورداری از تجربه و قدمت کافی و آگاهی از ذایقه مصرف کنندگان
              راهنمای ما در برآورده ساختن نیاز مشتریان قهوه تخصصی (موج سوم) است
              .تجربه ای به قدمت چهار نسل و ارتباط مستمر با مصرف کنندگان قهوه
              ضامن این ویژگیها است.
            </p>
            <div>
              <Link href="/about-us">
                <button className={styles.red_btn}>بیشتر بخوانید</button>
              </Link>
              <Link href="/category">
                <button>فروشگاه</button>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Promote;
