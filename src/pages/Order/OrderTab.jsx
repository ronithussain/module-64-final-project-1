// import FoodCard from '../../components/sectionTitle/FoodCard/FoodCard';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';

// const OrderTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     };
//     return (
//         <div>

//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid md:grid-cols-3 gap-6'>
//                         {
//                             items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//                         }
//                     </div>
//                 </SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;





import FoodCard from '../../components/sectionTitle/FoodCard/FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// ✅ 6 items per page
const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
        chunked.push(array.slice(i, i + size));
    }
    return chunked;
};

const OrderTab = ({ items }) => {
    const itemsPerPage = 6; // প্রতিটি পেজে ৬টি আইটেম দেখানো হবে
    const paginatedItems = chunkArray(items, itemsPerPage);

    return (
        <div>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {paginatedItems.map((group, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid md:grid-cols-3 gap-6'>
                            {group.map(item => <FoodCard key={item._id} item={item} />)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;


// 🚀 Code Explanation: প্রতিটি পেজে ৬টি করে কার্ড দেখানোর Swiper Pagination System
// এই OrderTab কম্পোনেন্টে আমরা Swiper.js ব্যবহার করে প্রতিটি পেজে ৬টি করে কার্ড দেখাচ্ছি।
// এটি Pagination System যুক্ত করে যাতে ইউজার Next/Previous করে আইটেমগুলো দেখতে পারে।

// 📌 1. প্রয়োজনীয় Import গুলো
// jsx
// Copy
// Edit
// import FoodCard from '../../components/sectionTitle/FoodCard/FoodCard';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// 🔹 FoodCard কম্পোনেন্ট ইমপোর্ট করা হয়েছে যাতে প্রতিটি ফুড কার্ড রেন্ডার করা যায়।
// 🔹 Swiper এবং SwiperSlide ইমপোর্ট করা হয়েছে swiper.js থেকে।
// 🔹 Swiper এর জন্য swiper/css ও swiper/css/pagination ইমপোর্ট করা হয়েছে।
// 🔹 Pagination মডিউল ইমপোর্ট করা হয়েছে যাতে Swiper Pagination ব্যবহার করা যায়।

// 📌 2. আইটেমগুলো ৬টা করে ভাগ করা (Chunking Function)
// jsx
// Copy
// Edit
// const chunkArray = (array, size) => {
//     const chunked = [];
//     for (let i = 0; i < array.length; i += size) {
//         chunked.push(array.slice(i, i + size));
//     }
//     return chunked;
// };
// 🔹 এখানে chunkArray() নামে একটা ফাংশন লিখেছি, যা অ্যারেকে ছোট ছোট গ্রুপে ভাগ করবে।
// 🔹 size অনুযায়ী প্রতিটি গ্রুপে নির্দিষ্ট সংখ্যক আইটেম রাখবে।
// 🔹 এই ক্ষেত্রে আমরা size = 6 দিয়েছি, যাতে প্রতিটি Swiper Slide-এ ৬টি আইটেম থাকে।

// 💡 কিভাবে কাজ করে?
// ধরো, আমাদের কাছে 15টি আইটেম আছে:
// 👉 প্রথম Slide: [Item 1, Item 2, Item 3, Item 4, Item 5, Item 6]
// 👉 দ্বিতীয় Slide: [Item 7, Item 8, Item 9, Item 10, Item 11, Item 12]
// 👉 তৃতীয় Slide: [Item 13, Item 14, Item 15]

// 📌 3. মূল OrderTab কম্পোনেন্ট তৈরি
// jsx
// Copy
// Edit
// const OrderTab = ({ items }) => {
//     const itemsPerPage = 6; // প্রতি পেজে ৬টি করে আইটেম থাকবে
//     const paginatedItems = chunkArray(items, itemsPerPage);
// 🔹 items প্রপস থেকে পাওয়া ডাটা ব্যবহার করা হয়েছে।
// 🔹 itemsPerPage = 6 সেট করা হয়েছে যাতে প্রতিটি পেজে ৬টি আইটেম থাকে।
// 🔹 chunkArray(items, itemsPerPage) ফাংশনটি items গুলোকে ৬-টা করে ভাগ করে paginatedItems এ রাখবে।

// 📌 4. Swiper Component দিয়ে Pagination যুক্ত করা
// jsx
// Copy
// Edit
//     return (
//         <div>
//             <Swiper
//                 pagination={{ clickable: true }}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
// 🔹 pagination={{ clickable: true }} 👉 এই সেটআপের ফলে ইউজার Pagination বাটনে ক্লিক করে পেজ চেঞ্জ করতে পারবে।
// 🔹 modules={[Pagination]} 👉 Swiper-এ Pagination মডিউল অ্যাক্টিভেট করা হয়েছে।
// 🔹 className="mySwiper" 👉 Swiper-এর জন্য কাস্টম ক্লাস যুক্ত করা হয়েছে, CSS প্রয়োগ করতে পারবে।

// 📌 5. SwiperSlide তৈরি করা (প্রতিটি পেজে ৬টি করে আইটেম)
// jsx
// Copy
// Edit
//                 {paginatedItems.map((group, index) => (
//                     <SwiperSlide key={index}>
//                         <div className='grid md:grid-cols-3 gap-6'>
//                             {group.map(item => <FoodCard key={item._id} item={item} />)}
//                         </div>
//                     </SwiperSlide>
//                 ))}
// 🔹 paginatedItems.map((group, index) => ...)

// এখানে প্রতিটি গ্রুপ (chunked items) থেকে SwiperSlide তৈরি করা হয়েছে।
// 🔹 <SwiperSlide key={index}>

// প্রতিটি Slide-এর জন্য একটা unique key সেট করা হয়েছে।
// 🔹 group.map(item => <FoodCard key={item._id} item={item} />)

// প্রতিটি গ্রুপ থেকে ৬টি FoodCard রেন্ডার করা হচ্ছে।
// 📌 6. কোডের শেষ অংশ (Component Export)
// jsx
// Copy
// Edit
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;
// 🔹 Swiper শেষ হওয়ার পর OrderTab কম্পোনেন্ট এক্সপোর্ট করা হয়েছে।

// ✨ চূড়ান্ত আউটপুট
// ✅ Swiper Pagination Enabled
// ✅ প্রতিটি Slide-এ ৬টি করে FoodCard
// ✅ ইউজার Next/Previous Button ক্লিক করে দেখতে পারবে
// ✅ Responsive Layout

// 🔥 সংক্ষেপে স্টেপ-গুলো
// 1️⃣ React Swiper.js ইমপোর্ট করা ✅
// 2️⃣ আইটেমগুলোকে ৬-টি করে ভাগ করা (Chunking Function) ✅
// 3️⃣ Swiper Component ব্যবহার করে Pagination যুক্ত করা ✅
// 4️⃣ প্রতিটি SwiperSlide-এ ৬টি করে FoodCard দেখানো ✅
// 5️⃣ Pagination Active করে ইউজার Interaction বাড়ানো ✅

// এখন, তোমার Order Page সুন্দরভাবে Pagination সহ ৬টি করে কার্ড দেখাবে! 🚀🥳