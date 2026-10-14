(() => {
    "use strict";

    // ==========================================
    // 1. THÔNG TIN PHƯƠNG TIỆN ĐẾN ĐÀ LẠT
    // ==========================================

    const arrivalInfo = [
        {
            title: "Xe khách / Limousine",
            content: `
                <h3>Thông tin chung</h3>
                <ul>
                    <li>
                        <strong>Các hãng xe tham khảo:</strong>
                        Phương Trang, Thành Bưởi, Lạc Hồng,
                        Minh Trí, Kumho Samco...
                    </li>
                    <li>
                        <strong>Thời gian di chuyển:</strong>
                        Khoảng 6–8 tiếng từ TP.HCM.
                    </li>
                    <li>
                        <strong>Giá vé tham khảo:</strong>
                        Khoảng 250.000đ–450.000đ/vé tùy loại xe
                        ghế ngồi, giường nằm hoặc cabin VIP.
                    </li>
                </ul>

                <h3>Tiện ích nổi bật</h3>
                <ul>
                    <li>
                        Một số hãng có xe trung chuyển đến khu vực
                        trung tâm Đà Lạt.
                    </li>
                    <li>
                        Một số dòng xe có Wi-Fi, cổng sạc USB
                        và màn hình giải trí riêng.
                    </li>
                </ul>

                <h3>Lưu ý</h3>
                <p>
                    Nên kiểm tra giờ khởi hành, điểm đón trả khách,
                    giá vé và chính sách hành lý trước khi đặt vé.
                </p>
            `
        },

        {
            title: "Máy bay",
            content: `
                <h3>Thông tin chung</h3>
                <ul>
                    <li>
                        <strong>Sân bay:</strong>
                        Liên Khương (DLI), cách trung tâm Đà Lạt
                        khoảng 30 km.
                    </li>
                    <li>
                        <strong>Thời gian bay tham khảo:</strong>
                        Khoảng 1 tiếng 50 phút từ Hà Nội hoặc
                        50 phút từ TP.HCM.
                    </li>
                    <li>
                        <strong>Hãng hàng không:</strong>
                        Hãng khai thác và lịch bay phụ thuộc vào
                        tuyến đường và ngày khởi hành.
                    </li>
                </ul>

                <h3>Di chuyển từ sân bay về trung tâm</h3>
                <ul>
                    <li>
                        <strong>Xe buýt sân bay:</strong>
                        Giá tham khảo khoảng 50.000đ–60.000đ/lượt.
                    </li>
                    <li>
                        <strong>Taxi / xe công nghệ:</strong>
                        Giá tham khảo khoảng 250.000đ–350.000đ/chuyến.
                    </li>
                </ul>

                <h3>Lưu ý</h3>
                <p>
                    Hãy kiểm tra lịch bay, giá vé và phương án
                    đưa đón từ sân bay trước ngày khởi hành.
                </p>
            `
        },

        {
            title: "Xe máy phượt",
            content: `
                <h3>Thông tin chung</h3>
                <ul>
                    <li>
                        <strong>Cung đường tham khảo:</strong>
                        Từ TP.HCM theo Quốc lộ 20, qua đèo Bảo Lộc.
                    </li>
                    <li>
                        <strong>Thời gian di chuyển:</strong>
                        Khoảng 7–9 tiếng, tùy tốc độ, thời tiết
                        và số lần nghỉ.
                    </li>
                    <li>
                        <strong>Trải nghiệm:</strong>
                        Chủ động lịch trình, ngắm cảnh và khám phá
                        các địa điểm dọc đường.
                    </li>
                </ul>

                <h3>Lưu ý an toàn</h3>
                <ul>
                    <li>
                        Kiểm tra phanh, lốp xe, đèn và tình trạng xe
                        trước khi khởi hành.
                    </li>
                    <li>
                        Mang giấy tờ cần thiết, áo mưa,
                        quần áo giữ ấm và găng tay.
                    </li>
                    <li>
                        Hạn chế đi đèo ban đêm hoặc khi thời tiết xấu.
                        Luôn giữ tốc độ phù hợp và nghỉ khi mệt.
                    </li>
                </ul>
            `
        }
    ];

    // ==========================================
    // 2. THÔNG TIN PHƯƠNG TIỆN Ở ĐÀ LẠT
    // ==========================================

    const localInfo = [
        {
            title: "Thuê xe máy",
            content: `
                <h3>Các loại xe phổ biến</h3>
                <ul>
                    <li>
                        <strong>Xe số:</strong>
                        Honda Wave, Yamaha Sirius.
                        Tiết kiệm xăng, phù hợp với nhu cầu
                        di chuyển trên những cung đường dốc.
                    </li>
                    <li>
                        <strong>Xe tay ga:</strong>
                        Honda Vision, Air Blade.
                        Thiết kế hiện đại và dễ điều khiển.
                    </li>
                    <li>
                        <strong>Giá thuê tham khảo:</strong>
                        Khoảng 100.000đ–180.000đ/ngày,
                        tùy loại xe số hay xe ga.
                    </li>
                </ul>

                <h3>Tiện ích và lưu ý</h3>
                <ul>
                    <li>
                        Giúp bạn linh hoạt khám phá thành phố,
                        các con dốc, hẻm nhỏ và điểm tham quan.
                    </li>
                    <li>
                        Kiểm tra kỹ phanh, lốp xe và đèn xi-nhan
                        trước khi nhận xe.
                    </li>
                    <li>
                        Giữ lại biên nhận thuê xe và số điện thoại
                        liên hệ cứu hộ của chủ xe.
                    </li>
                </ul>
            `
        },

        {
            title: "Ô tô tự lái",
            content: `
                <h3>Các dòng xe phổ biến</h3>
                <ul>
                    <li>
                        <strong>Xe 4 chỗ:</strong>
                        Toyota Vios, Hyundai Accent.
                    </li>
                    <li>
                        <strong>Xe 7 chỗ:</strong>
                        Mitsubishi Xpander, Toyota Innova.
                    </li>
                    <li>
                        <strong>Giá thuê tham khảo:</strong>
                        Khoảng 800.000đ–1.500.000đ/ngày,
                        chưa bao gồm tiền xăng.
                    </li>
                </ul>

                <h3>Tiện ích và lưu ý</h3>
                <ul>
                    <li>
                        Phù hợp với gia đình hoặc nhóm bạn,
                        giúp di chuyển thoải mái hơn khi trời lạnh,
                        mưa hoặc có sương mù.
                    </li>
                    <li>
                        Chuẩn bị bằng lái xe hợp lệ theo quy định,
                        căn cước công dân và giấy tờ cần thiết.
                    </li>
                    <li>
                        Kiểm tra mức tiền đặt cọc, bảo hiểm,
                        điều kiện thuê và trách nhiệm trong hợp đồng.
                    </li>
                </ul>
            `
        },

        {
            title: "Dịch vụ taxi & xe công nghệ",
            content: `
                <h3>Các dịch vụ phổ biến</h3>
                <ul>
                    <li>
                        <strong>Hãng taxi tham khảo:</strong>
                        Lado Taxi, Mai Linh, Taxi Đà Lạt.
                    </li>
                    <li>
                        <strong>Xe công nghệ:</strong>
                        Có thể kiểm tra dịch vụ trên ứng dụng
                        như Grab nếu khu vực có hỗ trợ.
                    </li>
                    <li>
                        <strong>Giá cước tham khảo:</strong>
                        Khoảng 12.000đ–16.000đ/km theo thông tin
                        tham khảo; giá thực tế tùy hãng, loại xe
                        và thời điểm.
                    </li>
                </ul>

                <h3>Tiện ích và lưu ý</h3>
                <ul>
                    <li>
                        Thuận tiện khi bạn chưa quen đường,
                        không muốn tự lái hoặc cần đi theo nhóm.
                    </li>
                    <li>
                        Kiểm tra giá cước trên ứng dụng hoặc hỏi
                        trước về cách tính tiền chuyến đi.
                    </li>
                    <li>
                        Lưu thông tin liên hệ của hãng taxi
                        để thuận tiện đặt xe khi cần.
                    </li>
                </ul>
            `
        }
    ];

    // ==========================================
    // 3. TẠO GIAO DIỆN POPUP
    // ==========================================

    function addPopupStyles() {
        if (document.getElementById("transport-modal-style")) {
            return;
        }

        const style = document.createElement("style");
        style.id = "transport-modal-style";

        style.textContent = `
            .transport-popup {
                position: fixed;
                inset: 0;
                z-index: 999999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(10, 18, 15, 0.72);
                backdrop-filter: blur(5px);
                -webkit-backdrop-filter: blur(5px);
                opacity: 0;
                transition: opacity 0.25s ease;
            }

            .transport-popup[hidden] {
                display: none !important;
            }

            .transport-popup.is-visible {
                opacity: 1;
            }

            .transport-popup-panel {
                width: min(720px, 100%);
                max-height: 85vh;
                overflow-y: auto;
                padding: 28px 30px;
                background: #ffffff;
                color: #293b32;
                border-radius: 18px;
                box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
                transform: translateY(18px) scale(0.97);
                transition: transform 0.3s ease;
            }

            .transport-popup.is-visible .transport-popup-panel {
                transform: translateY(0) scale(1);
            }

            .transport-popup-header {
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 16px;
            }

            .transport-popup-label {
                margin: 0 0 8px;
                color: #36866a;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 1px;
            }

            .transport-popup-title {
                margin: 0;
                color: #173f32;
                font-size: 25px;
                line-height: 1.4;
            }

            .transport-popup-close {
                width: 38px;
                height: 38px;
                flex-shrink: 0;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 50%;
                background: #edf4ef;
                color: #24563f;
                font-size: 26px;
                line-height: 1;
                cursor: pointer;
                transition: transform 0.25s, background 0.25s;
            }

            .transport-popup-close:hover {
                background: #dcebe0;
                transform: rotate(90deg);
            }

            .transport-popup-close:focus-visible {
                outline: 2px solid #36866a;
                outline-offset: 3px;
            }

            .transport-popup-divider {
                height: 1px;
                margin: 20px 0;
                background: #dce8df;
            }

            .transport-popup-content {
                font-size: 15px;
                line-height: 1.8;
            }

            .transport-popup-content h3 {
                margin: 22px 0 8px;
                color: #24563f;
                font-size: 17px;
            }

            .transport-popup-content h3:first-child {
                margin-top: 0;
            }

            .transport-popup-content ul {
                padding-left: 23px;
                margin: 8px 0 16px;
            }

            .transport-popup-content li {
                margin-bottom: 12px;
                padding-left: 4px;
            }

            .transport-popup-content li::marker {
                color: #36866a;
            }

            .transport-popup-content p {
                margin-top: 12px;
            }

            @media (max-width: 600px) {
                .transport-popup {
                    padding: 12px;
                }

                .transport-popup-panel {
                    padding: 22px 18px;
                    max-height: 90vh;
                }

                .transport-popup-title {
                    font-size: 21px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    // ==========================================
    // 4. TẠO POPUP VÀ GẮN MŨI TÊN
    // ==========================================

    function initTransportPopup() {
        if (document.getElementById("transport-popup")) {
            return;
        }

        const arrivalCards = Array.from(
            document.querySelectorAll(
                ".transport-arrival-section .transport-card"
            )
        );

        const localCards = Array.from(
            document.querySelectorAll(
                ".transport-local-section .transport-card"
            )
        );

        if (arrivalCards.length === 0 && localCards.length === 0) {
            console.error(
                "Không tìm thấy thẻ phương tiện. Kiểm tra class HTML."
            );
            return;
        }

        addPopupStyles();

        const popup = document.createElement("div");
        popup.className = "transport-popup";
        popup.id = "transport-popup";
        popup.hidden = true;

        popup.innerHTML = `
            <section
                class="transport-popup-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="transport-popup-title"
            >
                <div class="transport-popup-header">
                    <div>
                        <p class="transport-popup-label">
                            CẨM NANG DI CHUYỂN ĐÀ LẠT
                        </p>

                        <h2
                            class="transport-popup-title"
                            id="transport-popup-title"
                        ></h2>
                    </div>

                    <button
                        class="transport-popup-close"
                        type="button"
                        aria-label="Đóng cửa sổ"
                    >&times;</button>
                </div>

                <div class="transport-popup-divider"></div>

                <div
                    class="transport-popup-content"
                    id="transport-popup-content"
                ></div>
            </section>
        `;

        document.body.appendChild(popup);

        const closeButton = popup.querySelector(
            ".transport-popup-close"
        );

        const titleElement = popup.querySelector(
            ".transport-popup-title"
        );

        const contentElement = popup.querySelector(
            ".transport-popup-content"
        );

        let previousTrigger = null;
        let previousOverflow = "";
        let closeTimer = null;

        const allTriggers = [];

        // ------------------------------------------
        // MỞ POPUP
        // ------------------------------------------

        function openPopup(info, trigger) {
            if (!info) {
                console.error("Không tìm thấy dữ liệu phương tiện.");
                return;
            }

            if (closeTimer !== null) {
                clearTimeout(closeTimer);
                closeTimer = null;
            }

            if (popup.hidden) {
                previousOverflow = document.body.style.overflow;
            }

            previousTrigger = trigger;

            titleElement.textContent = info.title;
            contentElement.innerHTML = info.content;

            allTriggers.forEach(item => {
                item.setAttribute("aria-expanded", "false");
            });

            trigger.setAttribute("aria-expanded", "true");

            popup.hidden = false;
            document.body.style.overflow = "hidden";

            // Khởi động hiệu ứng hiện popup
            requestAnimationFrame(() => {
                popup.classList.add("is-visible");
            });

            closeButton.focus();
        }

        // ------------------------------------------
        // ĐÓNG POPUP
        // ------------------------------------------

        function closePopup() {
            if (popup.hidden || closeTimer !== null) {
                return;
            }

            popup.classList.remove("is-visible");

            document.body.style.overflow = previousOverflow;

            allTriggers.forEach(item => {
                item.setAttribute("aria-expanded", "false");
            });

            closeTimer = window.setTimeout(() => {
                popup.hidden = true;
                closeTimer = null;

                if (
                    previousTrigger &&
                    document.contains(previousTrigger)
                ) {
                    previousTrigger.focus();
                }
            }, 300);
        }

        // ------------------------------------------
        // GẮN SỰ KIỆN CHO MŨI TÊN CỦA TỪNG NHÓM
        // ------------------------------------------

        function bindTransportCards(cards, infoList) {
            cards.forEach((card, index) => {
                const trigger = card.querySelector(
                    ".transport-card-arrow"
                );

                if (!trigger) {
                    console.warn(
                        `Thẻ phương tiện số ${index + 1} không có mũi tên.`
                    );
                    return;
                }

                const info = infoList[index];

                if (!info) {
                    console.warn(
                        `Thiếu thông tin cho thẻ phương tiện số ${index + 1}.`
                    );
                    return;
                }

                allTriggers.push(trigger);

                // Hỗ trợ bàn phím vì mũi tên hiện là span
                if (
                    trigger.tagName !== "BUTTON" &&
                    trigger.tagName !== "A"
                ) {
                    trigger.setAttribute("role", "button");
                    trigger.setAttribute("tabindex", "0");
                }

                trigger.setAttribute("aria-expanded", "false");

                trigger.setAttribute(
                    "aria-label",
                    "Xem thông tin: " + info.title
                );

                trigger.addEventListener("click", event => {
                    event.preventDefault();
                    openPopup(info, trigger);
                });

                trigger.addEventListener("keydown", event => {
                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();
                        openPopup(info, trigger);
                    }
                });
            });
        }

        // Nhóm thứ nhất: xe khách, máy bay, xe máy phượt
        bindTransportCards(arrivalCards, arrivalInfo);

        // Nhóm thứ hai: thuê xe máy, ô tô tự lái, taxi
        bindTransportCards(localCards, localInfo);

        // Nút X
        closeButton.addEventListener("click", closePopup);

        // Bấm vùng tối bên ngoài hộp thoại
        popup.addEventListener("click", event => {
            if (event.target === popup) {
                closePopup();
            }
        });

        // Nhấn ESC
        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && !popup.hidden) {
                closePopup();
            }
        });
    }

    // ==========================================
    // 5. CHẠY SAU KHI HTML ĐÃ TẢI XONG
    // ==========================================

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initTransportPopup,
            { once: true }
        );
    } else {
        initTransportPopup();
    }
})();