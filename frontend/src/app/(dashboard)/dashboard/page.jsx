'use client';
import DashboardHeader from '@/components/DashboardHeader'
import Button from '@/components/ui/button'
import WalletCard from '@/components/ui/WalletCard';
import { useContext } from 'react';
import { UserContext } from '../layout';
import Loader from '@/components/Loader';

const Dashboard = () => {
  const { userAuth:{ firstName, access_token, profile_img, email}} = useContext(UserContext);
//   const handlePurchase = async () => {
//     try {
//         const response = await axios.post(`${serverApp}/transactions/pay`,
//             {email:email}, 
//             {
//             headers: {
//                 'Authorization':`Bearer ${access_token}`
//             }
//         });
//         console.log(response);
//         setTransaction(response.data);
//         window.location.href = `https://checkout.paystack.com/${response.data.access_code}`;
//     } catch (error) {
//         console.error('Error initializing transaction:', error);
//     }
// };
// function payWithPaystack() {
//     const handler = PaystackPop.setup({
//       key: import.meta.env.VITE_PAYSTACK_PUBLICK_KEY, // Replace with your public key
//       email: email,
//       amount:100000, // the amount value is multiplied by 100 to convert to the lowest currency unit
//       currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
//       callback: function(response) {
//         //this happens after the payment is completed successfully
//         const reference = response.reference;
//         setReference(reference)


//       },
//       onClose: function() {
//         alert('Transaction was not completed, window closed.');
//       },
//     });
//     handler.openIframe();
//   }

  if(!access_token) {
    return <Loader />
  }
  return (
    <div className='w-full flex flex-col gap-[1em]'>
        <DashboardHeader
         email={email}
          profile_img= {profile_img}
          firstName={firstName} />
        <div className='w-full flex items-center justify-between'>
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1667 0.999756L15.7646 2.11753C16.1689 2.87322 16.371 3.25107 16.2374 3.41289C16.1037 3.57471 15.6635 3.44402 14.7831 3.18264C13.9029 2.92131 12.9684 2.78071 12 2.78071C6.75329 2.78071 2.5 6.90822 2.5 11.9998C2.5 13.6789 2.96262 15.2533 3.77093 16.6093M8.83333 22.9998L8.23536 21.882C7.83108 21.1263 7.62894 20.7484 7.7626 20.5866C7.89627 20.4248 8.33649 20.5555 9.21689 20.8169C10.0971 21.0782 11.0316 21.2188 12 21.2188C17.2467 21.2188 21.5 17.0913 21.5 11.9998C21.5 10.3206 21.0374 8.74623 20.2291 7.39023" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <Button
           onClick={() => {}}
           title={
            <span className='flex items-center gap-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15C15 15.8284 15.6716 16.5 16.5 16.5C17.3284 16.5 18 15.8284 18 15C18 14.1716 17.3284 13.5 16.5 13.5C15.6716 13.5 15 14.1716 15 15Z" stroke="#fff" stroke-width="1.5"/>
              <path d="M3 12V6C5.1047 6.62133 9.57619 7.42671 15.0038 7.80281C17.9252 8.00525 19.3859 8.10646 20.1929 8.97688C21 9.8473 21 11.2497 21 14.0546V16.0683C21 18.9566 21 20.4008 20.0163 21.2998C19.0325 22.1987 17.6919 22.0677 15.0106 21.8058C14.3572 21.7419 13.6846 21.666 13 21.5762" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.6258 8C18.0035 6.57673 18.3453 3.98822 17.327 2.70292C16.6816 1.88827 15.7223 1.96654 14.7818 2.04926C9.83791 2.48406 6.34544 3.36731 4.39301 3.96737C3.55348 4.2254 3 5.04522 3 5.96044" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M11 18H7M7 18H3M7 18V22M7 18L7 14" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

              <h2>Fund Account</h2>

            </span>
           } />
        </div>
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-[1em] md:gap-[2em]'>
          <WalletCard
          bgColor='bg-[#0d60d8]' 
          icon={<svg className="w-[40px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z" stroke="#fff" stroke-width="1.5"/>
            <path d="M10 7H16C18.8284 7 20.2426 7 21.1213 7.87868C22 8.75736 22 10.1716 22 13V15C22 17.8284 22 19.2426 21.1213 20.1213C20.2426 21 18.8284 21 16 21H10C6.22876 21 4.34315 21 3.17157 19.8284C2 18.6569 2 16.7712 2 13V11C2 7.22876 2 5.34315 3.17157 4.17157C4.34315 3 6.22876 3 10 3H14C14.93 3 15.395 3 15.7765 3.10222C16.8117 3.37962 17.6204 4.18827 17.8978 5.22354C18 5.60504 18 6.07003 18 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            }
          amount='0.00' 
          title='Wallet' />
          <WalletCard 
          bgColor='bg-[#222222]'
          icon={<svg className='w-[40px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.9982 2C8.99043 2 7.04018 4.01899 4.73371 4.7549C3.79589 5.05413 3.32697 5.20374 3.1372 5.41465C2.94743 5.62556 2.89186 5.93375 2.78072 6.55013C1.59143 13.146 4.1909 19.244 10.3903 21.6175C11.0564 21.8725 11.3894 22 12.0015 22C12.6135 22 12.9466 21.8725 13.6126 21.6175C19.8116 19.2439 22.4086 13.146 21.219 6.55013C21.1078 5.93364 21.0522 5.6254 20.8624 5.41449C20.6726 5.20358 20.2037 5.05405 19.2659 4.75499C16.9585 4.01915 15.0061 2 11.9982 2Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            }
          amount='0.00' 
          title='Escrow Secured ' />
        </div>

        
    </div>
  )
}

export default Dashboard