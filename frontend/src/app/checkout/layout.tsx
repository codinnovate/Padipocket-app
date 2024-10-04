import SecuredByFooter from '@/components/SecuredByFooter';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className='bg-gray-500 flex justify-center items-center w-full h-screen'
          
        >
          <main className="max-w-2xl mx-auto p-2 mt-[4em]">
            <div className="border border-black/10 rounded-3xl  bg-white w-full  h-screen p-5">

          {children}
          <SecuredByFooter />
            </div>
          </main>
         
        </body>
      </html>
    );
  }
  