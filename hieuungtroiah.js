(() => {
    "use strict";

    // Mỗi khung có lịch chuyển ảnh độc lập.
    // Ảnh zoom trong 3 giây; thời gian chuyển được ngẫu nhiên hóa.
    const FIRST_DELAY_MIN_MS = 3500;
    const FIRST_DELAY_MAX_MS = 6500;
    const NEXT_DELAY_MIN_MS = 4500;
    const NEXT_DELAY_MAX_MS = 8000;

    const randomBetween = (min, max) =>
        Math.floor(min + Math.random() * (max - min + 1));

    const slideshowConfigs = [
        // HÀNG 1: THỜI TIẾT ĐÀ LẠT
        {
            selector: ".sg-weather-row .sg-feature-image",
            extraImages: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsnBG5_g5A7yhGvvr43vYYO36PlAIMTe1vqyf2lyUmYpP_JcRykTRU5LY&s=10",
                "https://danviet.ex-cdn.com/files/f1/upload/3-2018/images/2018-08-09/mua-thu-da-lat-htcamera-18-1533785021-width1080height1080.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooJ-VD7z5Fp_6Q0u0nRKKuIUQ6_jUp592PH1EvOAe1SE82_FE-GYw6K9P&s=10"
            ]
        },

        // HÀNG 2: GỢI Ý TRANG PHỤC
        {
            selector: ".sg-outfit-row .sg-feature-image",
            extraImages: [
                "https://down-vn.img.susercontent.com/file/sg-11134201-7rblz-lnhzxb29o1y2c3",
                "https://bizweb.dktcdn.net/100/502/737/products/o1cn01cxrsgd1re2kefqp1y3433775-5b6ff60b-608e-4626-8a90-0c9f9ad0fc82.jpg?v=1730790031217",
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1100&q=80"
            ]
        },

        // HÀNG 3, KHUNG ẢNH THỨ NHẤT: HÀNH LÝ
        {
            selector: ".sg-luggage-images > img:nth-child(1)",
            extraImages: [
                "https://static.vinwonders.com/2022/10/hanh-ly-xach-tay-topbanner-scaled.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFpegInQfEuuL5q2IP9r_msbfhRHwg8ntTvhRZ9Jr4Hpf5GDNcCD83gTk&s=10",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQugCd-bJFCB7sFPUnflHYJt_TCXrXKp3x83_MNBn0kVSaL_ekdIAlJ47tO&s=10"
            ]
        },

    ];

    // Tạo một khung slideshow từ ảnh HTML có sẵn.
    function buildSlideshow(originalImage, extraImages) {
        if (!originalImage) return;

        if (originalImage.dataset.sgSlideshowReady === "true") {
            return;
        }

        const originalSrc = originalImage.getAttribute("src");
        if (!originalSrc) return;

        const altText =
            originalImage.getAttribute("alt") ||
            "Ảnh minh họa du lịch Đà Lạt";

        const wrapper = document.createElement("div");

        // Giữ class để CSS hiện tại tiếp tục nhận diện khung ảnh.
        wrapper.className =
            originalImage.classList.contains("sg-feature-image")
                ? "sg-slideshow sg-feature-image"
                : "sg-slideshow sg-luggage-slide";

        wrapper.setAttribute("role", "group");
        wrapper.setAttribute(
            "aria-label",
            altText + " - trình chiếu ảnh"
        );

        // 1 ảnh gốc + 3 ảnh bổ sung = 4 ảnh mỗi khung.
        const imageSources = [originalSrc, ...extraImages];
        const slides = [];

        imageSources.forEach((source, index) => {
            const slide = document.createElement("div");
            slide.className = "sg-slide";

            if (index === 0) {
                slide.classList.add("is-active");
            }

            const image = document.createElement("img");
            image.src = source;
            image.alt =
                index === 0
                    ? altText
                    : `${altText}, ảnh ${index + 1}`;

            image.decoding = "async";
            image.loading = "eager";

            // Nếu ảnh lỗi tải, đánh dấu để bỏ qua.
            image.addEventListener("error", () => {
                slide.dataset.sgImageFailed = "true";

                if (slide.classList.contains("is-active")) {
                    const currentIndex = slides.indexOf(slide);

                    const nextSlide = findNextValidSlide(
                        slides,
                        currentIndex
                    );

                    if (nextSlide) {
                        activateSlide(slides, nextSlide);
                    }
                }
            });

            slide.appendChild(image);
            wrapper.appendChild(slide);
            slides.push(slide);
        });

        originalImage.dataset.sgSlideshowReady = "true";

        // Thay ảnh HTML ban đầu bằng khung slideshow cố định.
        originalImage.replaceWith(wrapper);

        // Lên lịch riêng cho từng khung, không dùng interval cố định.
        function scheduleNextSlide(delay) {
            window.setTimeout(() => {
                if (!document.contains(wrapper) || slides.length < 2) {
                    return;
                }

                const activeIndex = slides.findIndex(slide =>
                    slide.classList.contains("is-active")
                );

                const nextSlide = findNextValidSlide(
                    slides,
                    activeIndex
                );

                if (nextSlide) {
                    activateSlide(slides, nextSlide);
                }

                // Mỗi lần chuyển tiếp có độ trễ ngẫu nhiên 4,5–8 giây.
                scheduleNextSlide(
                    randomBetween(
                        NEXT_DELAY_MIN_MS,
                        NEXT_DELAY_MAX_MS
                    )
                );
            }, delay);
        }

        // Mỗi khung bắt đầu đổi ở thời điểm riêng: 3,5–6,5 giây.
        scheduleNextSlide(
            randomBetween(
                FIRST_DELAY_MIN_MS,
                FIRST_DELAY_MAX_MS
            )
        );
    }

    // Tìm ảnh kế tiếp không bị lỗi tải.
    function findNextValidSlide(slides, currentIndex) {
        if (!slides.length) return null;

        for (let offset = 1; offset <= slides.length; offset++) {
            const index =
                (currentIndex + offset + slides.length) % slides.length;

            const candidate = slides[index];

            if (candidate.dataset.sgImageFailed !== "true") {
                return candidate;
            }
        }

        return null;
    }

    // Chuyển cảnh bằng opacity và khởi động lại hiệu ứng zoom.
    function activateSlide(slides, nextSlide) {
        slides.forEach(slide => {
            slide.classList.remove("is-active");
        });

        // Buộc trình duyệt tính lại để animation chạy lại.
        void nextSlide.offsetWidth;

        nextSlide.classList.add("is-active");
    }

    // Khởi tạo tất cả khung ảnh.
    function initSlideshows() {
        slideshowConfigs.forEach(config => {
            const original = document.querySelector(config.selector);

            if (original) {
                buildSlideshow(original, config.extraImages);
            } else {
                console.warn(
                    "Không tìm thấy khung ảnh:",
                    config.selector
                );
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initSlideshows,
            { once: true }
        );
    } else {
        initSlideshows();
    }
})();