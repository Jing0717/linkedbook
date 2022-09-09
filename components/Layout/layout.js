import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className='bg-blue py-2'>
        <div className='container flex justify-between'>
          <h1 className='text-blue-logo bg-white text-3xl font-medium flex items-center px-1'>
            Linkedbook
          </h1>
          <nav className='flex space-x-4 text-white lg:space-x-8'>
            <Link className='' href='/'>
              <a href=''>
                <span className='material-symbols-outlined flex flex-col items-center'>
                  house
                </span>
                首頁
              </a>
            </Link>
            <Link href='/'>
              <a className=''>
                <span className='material-symbols-outlined flex flex-col items-center'>
                  group
                </span>
                人脈
              </a>
            </Link>
            <Link href='/'>
              <a className=''>
                <span className='material-symbols-outlined flex flex-col items-center'>
                  chat
                </span>
                訊息
              </a>
            </Link>
            <Link href='/'>
              <a className=''>
                <span className='material-symbols-outlined flex flex-col items-center'>
                  notifications
                </span>
                通知
              </a>
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
