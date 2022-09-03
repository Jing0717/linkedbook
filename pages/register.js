import Head from 'next/head';
import Link from 'next/link';

export default function Register() {
  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <section className='w-full h-screen'>
        <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-md space-y-4'>
            <div>
              <div className='bg-blue-logo text-white text-center text-4xl font-normal px-4 py-1'>
                Linkedbook
              </div>
              <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                會員註冊
              </h2>
            </div>
            <form className='mt-8 space-y-6' action='#' method='POST'>
              <input type='hidden' name='remember' value='true' />
              <div className='-space-y-px rounded-md shadow-sm'>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    請輸入姓名
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='請輸入姓名'
                  />
                </div>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    請輸入Email
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='請輸入Email'
                  />
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    請輸入密碼
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='請輸入密碼'
                  />
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    請再輸入密碼
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    placeholder='請再輸入密碼'
                  />
                </div>
              </div>

              <div className='flex items-center justify-end'>
                <div className='text-sm'>
                  <Link href='/login'>
                    <a className='font-medium text-blue-dark hover:text-blue-neutral underline'>
                      已經有帳號了? 登入
                    </a>
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type='submit'
                  className='group relative flex w-full justify-center rounded-md border border-transparent bg-blue-logo py-2 px-4 text-sm font-medium text-white hover:bg-blue-neutral focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg
                      className='h-5 w-5 text-white group-hover:text-blue-dark'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  Sign up
                </button>
                <div className='flex justify-between items-center mt-3'>
                  <hr className='w-full' />
                  <span className='p-2 text-gray-400 mb-1'>OR</span>
                  <hr className='w-full' />
                </div>
                <button className='uppercase py-2 mt-3 text-white w-full text-center rounded-md bg-blue-800 hover:bg-blue-900 flex items-center relative justify-center'>
                  <img
                    src='./fb.png'
                    alt='fb'
                    className='hover:bg-blue-neutral w-5 h-5 absolute left-4'
                  />
                  <span>facebook</span>
                </button>
                <button className='uppercase py-2 mt-3 text-white w-full rounded-md bg-red-800 hover:bg-red-900 flex items-center relative justify-center'>
                  <img
                    src='./google.png'
                    alt='google'
                    className='hover:bg-blue-neutral w-5 h-5 absolute left-4'
                  />
                  <span className=''>Google</span>
                </button>
                <button className='uppercase py-2 mt-3 text-white w-full rounded-md bg-green-800 hover:bg-green-900 flex items-center relative justify-center'>
                  <img
                    src='./line.png'
                    alt='line'
                    className='hover:bg-blue-neutral w-5 h-5 absolute left-4'
                  />
                  <span className=''>Line</span>
                </button>
                <button className='uppercase py-2 mt-3 text-white w-full rounded-md bg-gray-500 hover:bg-gray-600 flex items-center relative justify-center'>
                  <img
                    src='./github.png'
                    alt='github'
                    className='hover:bg-blue-neutral w-5 h-5 absolute left-4'
                  />
                  <span className=''>Github</span>
                </button>
              </div>
            </form>
            <div>
              <p className='text-gray-400 text-center mt-20'>
                Copyright © 2022{' '}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
