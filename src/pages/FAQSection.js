import React, { useState, useRef, useEffect } from 'react';
import './FAQSection.css';
import { Link } from 'react-router-dom';
import logoMenu from '../assets/logo-menu.jpg';




const faqData = [
  {
    question: 'Quy trình trồng cây ăn quả đúng cách gồm những bước nào?',
    answer: `Quy trình trồng cây ăn quả bao gồm các bước sau:
- Chuẩn bị đất trồng: Làm tơi đất, loại bỏ cỏ dại và các tác nhân gây hại.
- Đào hố: Kích thước hố thường là 40x40x40 cm hoặc 60x60x60 cm, tùy theo loại cây.
- Bón phân lót: Trộn phân chuồng hoai mục với phân lân và đất mặt, sau đó lấp lại hố và tưới nước.
- Chọn giống cây: Chọn cây giống khỏe mạnh, không sâu bệnh, phù hợp với điều kiện địa phương.
- Trồng cây: Đặt cây vào hố, lấp đất và nén chặt, tưới nước đầy đủ.
- Chăm sóc sau trồng: Tưới nước đều đặn, bón phân định kỳ, cắt tỉa cành và phòng trừ sâu bệnh.`
  },
  {
    question: 'Những sai lầm thường gặp khi trồng cây ăn quả và cách khắc phục là gì?',
    answer: `Một số sai lầm phổ biến bao gồm:
- Chọn giống không phù hợp.
- Đất trồng không đạt yêu cầu.
- Bón phân không đúng cách.
- Tưới nước không hợp lý.
Cách khắc phục: Chọn giống phù hợp, cải tạo đất trồng, bón phân và tưới nước đúng cách, thường xuyên kiểm tra và điều chỉnh các yếu tố môi trường.`
  },
  {
    question: 'Câu hỏi và câu trả lời thường gặp về phòng trừ sâu bệnh trên cây ăn quả',
    answer: `1. Làm thế nào để phòng trị rệp sáp và rầy trắng ở phần rễ cây cam sành và cam dây?
=> Dùng thuốc Movento 150OD kết hợp với thuốc nấm và khuẩn hai lần cách nhau 3–5 ngày.

2. Movento có hiệu quả trong việc phòng trị rệp sáp dưới rễ khi phun thuốc trên lá cây không?
=> Có, nhờ cơ chế lưu dẫn hai chiều của thuốc.

3. Cách phòng trị sâu vẽ bùa trên cây cam và bưởi như thế nào?
=> Điều khiển đọt non ra đồng loạt, phun thuốc lưu dẫn ở giai đoạn mới nhú đọt.

4. Nên phun thuốc gì để phòng chống rụng bông và bệnh thán thư trên cam sành trong mùa mưa?
=> Rửa nước sáng hôm sau mưa, phun Antracol 70WP hoặc Nativo 750WG.`
  }
];

const videos = [
    `<iframe width="100%" height="200" src="https://www.youtube.com/embed/j4laJqhjz_U?si=_58JNqT4LHAaRj3K" frameborder="0" allowfullscreen></iframe>`,
    `<iframe width="100%" height="200" src="https://www.youtube.com/embed/g4aIwp9AgyM?si=LH-TkbAqq73roa8B" frameborder="0" allowfullscreen></iframe>`,
    `<iframe width="100%" height="200" src="https://www.youtube.com/embed/hj1hdhh8luo?si=acxQ1RvZbUP8q4zr" frameborder="0" allowfullscreen></iframe>`,
    `<iframe width="100%" height="200" src="https://www.youtube.com/embed/iE2KoxRaH48?si=-O3cx1IsPDx9DbW2" frameborder="0" allowfullscreen></iframe>`
  ];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);
  
    useEffect(() => {
      answerRefs.current.forEach((ref, i) => {
        if (ref) {
          ref.style.maxHeight = openIndex === i ? `${ref.scrollHeight}px` : '0px';
        }
      });
    }, [openIndex]);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
       <div className='main-chinh'>
        <nav className="navbar">
        <div className="logo">
          <img src={logoMenu} style={{width:"60px"}} alt=''/>
          <span className="logo-text">AgriGuard</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/about">Dự Án</Link></li>
          <li><Link to="/huongdan">Hướng dẫn kỹ thuật</Link></li>
        </ul>
      </nav>
       
      <div className="container-1">
        

        <h1 className="heading">Hướng dẫn kỹ thuật</h1>
  
        <div className="faq-section">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggle(index)}>
                {item.question}
                <span className="arrow">{openIndex === index ? '▲' : '▼'}</span>
              </button>
              <div
                className="faq-answer-wrapper"
                ref={(el) => (answerRefs.current[index] = el)}
              >
                <div className="faq-answer">
                  <pre>{item.answer}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="video-section">
          {videos.map((link, index) => (
            <div
  key={index}
  className="video-frame"
  dangerouslySetInnerHTML={{ __html: link }}
></div>
          ))}
      </div>
      </div>
      <footer className="footer">
      <div className="footer-container">
        <p>© 2025 AgriGuard. All rights reserved.</p>
        <p>
          Made by Trương Gia Quyền - <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
      </div> 
  );
}
export default FAQSection
