// function navbar() {
//   return (
//     `
//       <div id="navMain">

//         <div class="navOneChild">
//             <a href="/index.html">
//                 <img src="../img/logo.png" alt="">
//             </a>
//         </div>

//         <div class="navChildTwo">
//             <a href="../index.html">Home</a>
//             <a href="">Shop</a>
//             <a href="">Blog</a>
//             <a id="registerId" href="./register/register.html">Register</a>
//             <a id="loginId" href="./login/login.html">Login</a>
//         </div>

//         <div class="navChildThree" id="navChildThree">

//            <a <img id="srchId" src="../img/search-137.png" alt=""></a>

//             <a id="cartId" href=""><img src="../img/4219909.png" alt=""></a>

//             <a id="userId" href="">
//                 <img src="../img/219988.png" alt="">
//             </a>
//             <a href="" id="likeId"> <img src="../img/images.png" alt=""></a>
//         </div>

//     </div>
//         `
//   )
// }
// export default navbar





document.addEventListener("DOMContentLoaded", function () {
  // Get the toggle button and navbar menu
  const toggleButton = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-default');

  // Add event listener for the toggle button
  toggleButton.addEventListener('click', function () {
    // Toggle the 'hidden' class to show/hide the menu
    navbarMenu.classList.toggle('hidden');

    // Update the 'aria-expanded' attribute for accessibility
    const isExpanded = navbarMenu.classList.contains('hidden');
    toggleButton.setAttribute('aria-expanded', !isExpanded);
  });
});

function navbar() {



  return (

    `
       <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="../index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="../img/logo.png" class="h-8 md:h-10" alt="Flowbite Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" id="navbar-toggle">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="../index.html" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="../product/electronic.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Electronic</a>
              </li>
               <li>
                <a href="../product/jwelery.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Jwelery</a>
              </li>
              <li>
                <a id="registerId" href="../register/register.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Register</a>
              </li>
              <li>
                <a id="loginId" href="../login/login.html" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
              </li>
              <div class="flex space-x-4" id="navChildThree">
              <li>
                <a id="cartId" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <img src="../img/4219909.png" alt="" class="w-8 md:w-8 h-auto"/>
                </a>
              </li>
              <li>
                <a id="userId" href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <img src="../img/219988.png" alt="" class="w-8 md:w-8 h-auto"/>
                </a>
              </li>
            </div>
            
            </ul>
          </div>
        </div>
      </nav>
    `
  );
}
export default navbar;


