import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout/layout';

export default function Register() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0'
        />
      </Head>
      <Layout>
        <div className='min-h-[calc(100vh-64px)] bg-gray-bg'>
          <div className='container flex justify-between pt-6 items-start'>
            <section className='mx-auto w-[20%] border-2 border-black rounded-md text-center pt-7 pb-16 bg-white'>
              <span className='material-symbols-outlined text-6xl text-gray-500'>
                account_circle
              </span>
              <p className='text-xl'>哈利, 您好!</p>
              <Link href={'/'}>
                <a>新增相片</a>
              </Link>
            </section>
            <main className='w-[48%] mx-6'>
              <section className='px-8 py-4 border-2 border-black rounded-md bg-white'>
                <div className='flex space-x-2 items-center mb-3'>
                  <span className='material-symbols-outlined text-4xl text-gray-500'>
                    account_circle
                  </span>
                  <input
                    type='text'
                    name=''
                    id=''
                    className='border rounded-md p-2 w-2/3'
                    placeholder='撰寫動態'
                  />
                </div>
                <div className='flex items-center space-x-2'>
                  <span className='material-symbols-outlined text-4xl'>
                    imagesmode
                  </span>
                  <Link href='#'>
                    <a
                      href=''
                      className='border-2 border-black rounded-md p-1 bg-blue text-white'
                    >
                      上傳照片
                    </a>
                  </Link>
                </div>
              </section>
              <article>
                <div className='card border-2 border-black rounded-md px-8 py-2 mt-5 bg-white'>
                  <div className=' flex items-center border-b border-solid border-black py-1'>
                    <span className='material-symbols-outlined text-4xl text-gray-500'>
                      account_circle
                    </span>
                    <span className='material-symbols-outlined -ml-3 z-50 text-4xl text-gray-500'>
                      account_circle
                    </span>
                    <p className='ml-1'>榮恩·衛斯理 和 妙麗·格蘭傑 都說讚</p>
                  </div>
                  <div className='mt-2'>
                    <div className='flex items-center mb-2'>
                      <span className='material-symbols-outlined text-7xl text-gray-500 mr-1'>
                        account_circle
                      </span>
                      <ul className=''>
                        <li className='font-bold'>阿不思·鄧不利多</li>
                        <li>霍格華茲</li>
                        <li>·1小時前</li>
                      </ul>
                    </div>
                    <p>駭客魁地奇即將於9/18號舉行，大家動起來！</p>
                    <p className='text-gray-400 text-right mt-2'>······展開</p>
                  </div>
                  <div className='border-t border-black flex justify-between pt-2 text-gray-600'>
                    <a href='#' className='flex'>
                      <span className='material-symbols-outlined'>
                        thumb_up
                      </span>
                      讚
                    </a>
                    <a href='#' className='flex'>
                      <span className='material-symbols-outlined text-xl'>
                        chat
                      </span>
                      回應
                    </a>
                  </div>
                </div>
              </article>
            </main>
            <aside className='w-[28%] border-2 border-black rounded-md pl-6 py-7 bg-white'>
              <p className='text-md font-bold mb-4'>新加入人員</p>
              <ul className='space-y-2'>
                <li className='flex'>
                  <span className='material-symbols-outlined mr-2 text-5xl text-gray-500'>
                    account_circle
                  </span>
                  <div className='flex flex-col items-start'>
                    <p>跩哥。馬份</p>
                    <p>Slytherin 史萊哲林</p>
                    <a href='#' className='border p-1 px-2 flex'>
                      <span className='material-symbols-outlined'>add</span>
                      <span>關注</span>
                    </a>
                  </div>
                </li>
                <li className='flex'>
                  <span className='material-symbols-outlined mr-2 text-5xl text-gray-500'>
                    account_circle
                  </span>
                  <div className='flex flex-col items-start'>
                    <p>奈威 · 隆巴頓</p>
                    <p>Gryffindor 葛來分多</p>
                    <a href='' className='border p-1 px-2 flex'>
                      <span className='material-symbols-outlined'>add</span>
                      <span>關注</span>
                    </a>
                  </div>
                </li>
                <li className='flex'>
                  <span className='material-symbols-outlined mr-2 text-5xl text-gray-500'>
                    account_circle
                  </span>
                  <div className='flex flex-col items-start'>
                    <p>張秋</p>
                    <p>Ravenclaw 雷文克勞</p>
                    <a href='' className='border py-1 px-2 flex'>
                      <span className='material-symbols-outlined'>add</span>
                      <span>關注</span>
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </Layout>
    </>
  );
}
