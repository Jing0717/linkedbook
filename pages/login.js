import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function login() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main className='flex'>
        <section className='hidden sm:block sm:w-2/5 lg:w-3/5'>
          <div className='relative h-screen object-cover w-full'>
            <Image
              layout='fill'
              objectFit='cover'
              src='https://source.unsplash.com/random'
              alt='random image'
            />
          </div>
        </section>
        <section className='w-full sm:w-3/5 lg:w-2/5 h-screen'>
          <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-md space-y-8'>
              <div>
                <div className='bg-blue text-white text-center text-4xl font-normal px-4 py-1'>
                  Linkedbook
                </div>
                <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
                  Sign in to your account
                </h2>
              </div>
              <form className='mt-8 space-y-6' action='#' method='POST'>
                <input type='hidden' name='remember' value='true' />
                <div className='-space-y-px rounded-md shadow-sm'>
                  <div>
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>
                    <input
                      id='email-address'
                      name='email'
                      type='email'
                      autoComplete='email'
                      required
                      className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      placeholder='Email address'
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='sr-only'>
                      Password
                    </label>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      autoComplete='current-password'
                      required
                      className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      placeholder='Password'
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <Link href='/register'>
                      <a className='font-medium text-blue-dark hover:text-blue-neutral underline'>
                        Sign Up
                      </a>
                    </Link>
                  </div>

                  <div className='text-sm'>
                    <Link href='#'>
                      <a className='font-medium text-blue-dark hover:text-blue-neutral underline'>
                        Forgot your password?
                      </a>
                    </Link>
                  </div>
                </div>
                <div>
                  <Link href='/home'>
                    <a className='group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white hover:bg-blue-light focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <svg
                          className='h-5 w-5 text-white group-hover:text-blue-neutral'
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
                      Sign in
                    </a>
                  </Link>
                </div>
              </form>
              <div>
                <p className='text-gray-400 text-center'>Copyright © 2022 </p>
                <ul className='flex space-x-8 mt-5 justify-center'>
                  <li>
                    <Link href='/home'>
                      <a>
                        <Image
                          width={'40px'}
                          height={'40px'}
                          src='/google.png'
                          alt='google'
                          className='bg-gray-400 rounded p-1 hover:bg-red-500'
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home'>
                      <a>
                        <Image
                          width={'40px'}
                          height={'40px'}
                          src='/line.png'
                          alt='line'
                          className='bg-gray-400 rounded p-1 hover:bg-green-500'
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home'>
                      <a>
                        <Image
                          width={'40px'}
                          height={'40px'}
                          src='/fb.png'
                          alt='fb'
                          className='bg-gray-400 rounded p-1 hover:bg-blue-500'
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/home'>
                      <a>
                        <Image
                          width={'40px'}
                          height={'40px'}
                          src='/github.png'
                          alt='github'
                          className='bg-gray-400 rounded p-1 hover:bg-gray-600'
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
