import React from "react";
import htmlImage from "../Images/html.png";
import cssImage from "../Images/css.png";
import jsImage from "../Images/Javascript.png";
import ralavelImage from "../Images/ralavel.png";
import pythonImage from "../Images/python.png";
import javaImage from "../Images/java.png";
import nodeImage from "../Images/nodejs.png";
import nestImage from "../Images/nestjs.png";

import reactImage from "../Images/react.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/ichiban.png";
import { motion } from "framer-motion";
import BlackBoxTransition from "../utils/BlackBoxTransition";

const Home = () => {
  return (
    <section>
      <BlackBoxTransition>
        <motion.div
          className="container text-center"
          initial={{ opacity: 0 }} // 애니메이션 시작 시 초기 상태
          animate={{ opacity: 1 }} // 애니메이션 동안의 중간 상태
          transition={{ duration: 0.6, delay: 0.3 }} // 애니메이션의 지속 시간
          // exit={{ opacity: 0 }} // 애니메이션 종료 시의 상태
        >
          <h1>Shin Code</h1>

          <img src={profileImage} className="profileImage" />

          <h2>
            私の名前は日本語で一番を意味する、イ・ジェイルと申しますわ〜！
          </h2>

          <section className="page-section" id="services">
            <div className="service">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">PORTFOLIO</h2>
                <h3 className="section-subheading text-muted mb-5">
                  私が作った作品一覧です
                </h3>
              </div>
              <div className="row text-center">
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">ichibans' Blog</h4>
                  <p className="text-muted">自分の1日を記録するBlog！</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">ichibans' Twitter</h4>
                  <p className="text-muted">人との情報交換をしよう！</p>
                </div>
                <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="my-3">Hansung 建築事務所</h4>
                  <p className="text-muted">建築事務所の広報サイト！</p>
                </div>
              </div>
            </div>
          </section>

          <section id="skill">
            <div className="text-center">
              <h1 className="title">スキル</h1>
              <div className="row text-center">
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={htmlImage} />
                  <h4>html</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={cssImage} />
                  <h4>css</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={jsImage} />
                  <h4>javascript</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={pythonImage} />
                  <h4>python</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={javaImage} />
                  <h4>java</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={ralavelImage} />
                  <h4>HTML/CSS</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={reactImage} />
                  <h4>React</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={nodeImage} />
                  <h4>React</h4>
                </motion.div>
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="col-md-4 services"
                >
                  <img src={nestImage} />
                  <h4>React</h4>
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </BlackBoxTransition>
    </section>
  );
};

export default Home;
