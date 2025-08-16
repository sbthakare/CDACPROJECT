// Import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The Future of Artificial Intelligence",
    author: "John Doe",
    date: "15 Jan, 2025",
    time: "10am",
    imgUrl: img01,
    description:
      "Artificial Intelligence (AI) is transforming industries worldwide. From automation to decision-making, AI is enabling businesses to operate more efficiently. Recent advancements in machine learning and deep learning are paving the way for smarter applications, self-driving cars, and even human-like chatbots. In this article, we explore the future potential of AI and its impact on various sectors, including healthcare, finance, and cybersecurity.",
    quote:
      "AI is not a threat but a tool that enhances human capabilities and opens new opportunities for innovation.",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for 2025",
    author: "Jane Smith",
    date: "10 Feb, 2025",
    time: "2pm",
    imgUrl: img02,
    description:
      "With cyber threats evolving rapidly, it's crucial to stay updated on the best cybersecurity practices. Phishing attacks, ransomware, and data breaches are becoming more sophisticated, making it essential to implement strong security measures. This blog covers key practices such as using multi-factor authentication, keeping software up-to-date, and educating employees about cybersecurity threats.",
    quote:
      "The best defense against cyber threats is a proactive approach and continuous vigilance.",
  },
  {
    id: 3,
    title: "The Rise of Cloud Computing and Its Benefits",
    author: "Michael Brown",
    date: "5 Mar, 2025",
    time: "4pm",
    imgUrl: img03,
    description:
      "Cloud computing has revolutionized the way businesses store, process, and manage data. With platforms like AWS, Azure, and Google Cloud, companies can scale their operations effortlessly and reduce infrastructure costs. This article discusses the advantages of cloud computing, including flexibility, cost savings, and enhanced security, while also addressing concerns such as data privacy and vendor lock-in.",
    quote:
      "Cloud computing is not just a trend but a necessity for businesses aiming for scalability and efficiency.",
  },
];

export default blogData;
