import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Landing() {
  const [openedMenu, setOpenedMenu] = useState(false);
  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
      />
      <Head>
        <title>Landing page</title>
      </Head>
      <header className='logo bg-no-repeat h-screen bg-cover bg-center relative'>
        <nav className='flex justify-between items-center pt-5 text-white px-3'>
          <Link href=''>
            <a className='bg-white text-blue-logo/80 text-4xl font-normal pr-4 pl-5 ml-3'>
              Linkedbook
            </a>
          </Link>
          <div className='flex items-center'>
            <Link href='#'>
              <a
                className='pr-3 md:hidden'
                onClick={() => setOpenedMenu(!openedMenu)}
              >
                <span className='material-symbols-outlined text-4xl'>menu</span>
              </a>
            </Link>
            <Link href='/register'>
              <a className='hidden mr-14 md:block hover:text-blue-neutral'>
                註冊
              </a>
            </Link>
            <Link href='/login'>
              <a className='hidden ring-white ring-1 px-7 py-2 md:block hover:bg-white hover:text-blue '>
                登入
              </a>
            </Link>
          </div>
        </nav>
        {openedMenu && (
          <ul className='text-white float-right text-center text-blue bg-white mt-1 md:hidden'>
            <li>
              <Link href='/login'>
                <a className='block text-sm px-20 py-2 hover:text-white hover:bg-blue-neutral hover:border-none ease-in duration-300'>
                  登入
                </a>
              </Link>
            </li>
            <li>
              <Link href='/register'>
                <a className='block text-sm px-20 py-2  hover:text-white hover:bg-blue-neutral hover:border-none ease-in duration-300'>
                  註冊
                </a>
              </Link>
            </li>
          </ul>
        )}
        <section className='absolute top-1/3 left-1/2 ml-[-148px] text-white md:ml-[-312px]'>
          <h1 className='text-center text-6xl text-white/80 leading-[1.2] md:text-9xl'>
            Linkedbook
          </h1>
          <p className='text-center mb-4 text-base leading-[38px] md:text-[32px] md:mb-7'>
            專業人士的社群平台
          </p>
          <div className='flex flex-col justify-center md:flex-row md:rounded'>
            <input
              type='text'
              placeholder='輸入你的電子信箱'
              className='text-xl text-black rounded-t py-2 px-[13px] placeholder-slate-300 md:rounded-none md:rounded-l'
            />
            <button className='bg-blue py-2 rounded-b md:rounded-none md:rounded-r md:px-7 hover:bg-blue-neutral'>
              開始吧!
            </button>
          </div>
        </section>
      </header>
      <main>
        <section className='bg-white py-16'>
          <h2 className='text-4xl text-center'>How It Works</h2>
          <p className='text-center'>平台功能</p>
          <ul className='flex flex-col items-center gap-6 text-center mt-8 md:flex-row'>
            <li className='w-1/3 '>
              <span className='material-symbols-outlined'>
                <Link href=''>
                  <a className='text-4xl text-blue'>assignment</a>
                </Link>
              </span>
              <p className='font-bold mt-4'>Search Oportunities</p>
              <p className='mt-3 text-gray-500 text-sm'>
                關注任何職缺狀態
                <br />
                尋找機會
              </p>
            </li>
            <li className='w-1/3 '>
              <span className='material-symbols-outlined'>
                <Link href=''>
                  <a className='text-4xl text-blue'>insights</a>
                </Link>
              </span>
              <p className='font-bold mt-4'>Reach Clients</p>
              <p className='mt-3 text-gray-500 text-sm'>
                接觸潛在人才
                <br />
                媒合合適人選
              </p>
            </li>
            <li className='w-1/3 '>
              <span className='material-symbols-outlined'>
                <Link href=''>
                  <a className='text-4xl text-blue'>savings</a>
                </Link>
              </span>
              <p className='font-bold mt-4'>Get Rewarded</p>
              <p className='mt-3 text-gray-500 text-sm'>
                求職者與求才者的
                <br />
                雙贏交流環境
              </p>
            </li>
          </ul>
        </section>
        <section className='bg-member h-[379px] bg-no-repeat bg-center bg-cover relative'>
          <div className='text-3xl absolute bg-white/50 p-5 right-3 top-6 md:bottom-12 md:left-[18%] md:right-auto md:top-auto'>
            <h2>
              結識<span className='text-blue'>專業人士</span>
            </h2>
            <button className='text-base bg-blue p-3 mt-4 text-white'>
              尋找更多
            </button>
          </div>
        </section>
        <section className='bg-[#DDDDDD] py-[28px] text-white text-3xl'>
          <div className='container flex flex-col'>
            <div className='flex flex-col lg:flex-row'>
              <img
                src='/linkedbook_people01.png'
                alt='linkedbook_people01'
                className='object-cover h-[455px] w-full'
              />
              <div className='flex flex-col lg:ml-3'>
                <div className='bg-[#334657] py-8 px-7 mt-3 lg:min-w-max lg:mt-0'>
                  讓合適的人選
                  <br />
                  知道
                  <br />
                  <span className='text-blue-light'>最新</span>職缺動態
                </div>
                <img
                  src='/linkedbook_people02.png'
                  alt='linkedbook_people02'
                  className='object-cover h-[308px] mt-3'
                />
              </div>
            </div>

            <div className='flex flex-col lg:flex-row  mt-3 lg:mt-14'>
              <div className='bg-[#334657] py-8 px-7 lg:mr-6 lg:max-h-60'>
                <span className='text-blue-light'>掌握</span>職場動向
                <br />
                <p className='text-base mt-6'>
                  從故事，到通訊等，Linkedbook <br />
                  盡是掌握產業最新討論的工具。
                </p>
              </div>
              <img
                src='/linkedbook_hands.png'
                alt='linkedbook_hands'
                className='object-cover w-full mt-3 h-[240px] lg:mt-0 lg:h-[344px] lg:w-2/3'
              />
            </div>
          </div>
        </section>
        <section className='bg-people3 bg-no-repeat w-full bg-cover bg-center min-h-[428px] lg:min-h-[317px] relative'>
          <div className='text-3xl absolute bg-white/50 p-5 mx-3 bottom-6 md:bottom-12 md:top-auto md:right-[5%]'>
            <h2>
              與老同事、老同學等
              <span className='text-blue-light'>重拾聯絡</span>的機會
            </h2>
            <button className='text-base bg-blue p-3 mt-4 text-white float-right'>
              尋找更多
            </button>
          </div>
        </section>
      </main>
      <div className='bg-blue-dark flex flex-col items-center pt-8 h-[514px] px-3'>
        <section className=' bg-[#F5F5F5]  py-12 w-full max-w-[642px] px-3 mx-3 md:px-12'>
          <p className='text-right text-[32px]'>保持聯繫</p>
          <ul className='flex flex-col space-y-4 mt-7'>
            <li>
              <input
                className='py-[7px] pl-[13px] w-full placeholder-slate-300 rounded ring-1 ring-[#CED4DA]'
                type='text'
                placeholder='全名'
              />
            </li>
            <li>
              <input
                className='py-[7px] pl-[13px] w-full placeholder-slate-300 rounded ring-1 ring-[#CED4DA]'
                type='text'
                placeholder='電子信箱'
              />
            </li>
            <li>
              <input
                className='py-[7px] pl-[13px] w-full placeholder-slate-300 rounded ring-1 ring-[#CED4DA]'
                type='text'
                placeholder='電話號碼'
              />
            </li>
            <li>
              <textarea
                className='py-[7px] pl-[13px] w-full placeholder-slate-300 rounded ring-1 ring-[#CED4DA]'
                rows={8}
                type=''
                placeholder='你的訊息'
              />
            </li>
          </ul>
          <button className='text-blue float-right px-7 py-2 bg-white mt-[13px]'>
            發送訊息
          </button>
        </section>
      </div>
      <footer className='bg-blue max-w-[1116px] h-auto w-full mx-auto text-white pb-8'>
        <section className='flex flex-col items-center'>
          <div className='text-center md:flex md:flex-row-reverse md:justify-between md:w-full md:items-end md:px-[95px]'>
            <div className='flex flex-col items-center'>
              <ul className='flex gap-4 mt-40'>
                <li>
                  <Link href='#'>
                    <a>
                      <img src='./google.png' alt='' className='bg-google' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>
                      <img src='./line.png' alt='' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>
                      <img src='./fb.png' alt='' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>
                      <img src='./github.png' alt='' />
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className='flex mt-8'>
                <li>
                  <Link href='/register'>
                    <a className='px-7 py-2 bg-white text-blue'>註冊</a>
                  </Link>
                </li>
                <li>
                  <Link href='/login'>
                    <a className='px-7 py-2 ring-2 ml-3'>登入</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='md:flex md:flex-col'>
              <p className='text-5xl mt-4'>Linkedbook</p>
              <p className='text-base mt-4'>Copyright ©2022</p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
