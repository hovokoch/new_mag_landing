import React from "react";

import styles from "./Home.module.scss";
import classNames from "classnames";
import cardImage from "../../assets/img/desktop-card-img.png";
import minBestImg from "../../assets/img/min-best-img.png";
import minCard from "../../assets/img/other-img.png";
import articleImg from "../../assets/img/article-img.png";
import attentionImg from "../../assets/img/attention-img.png";
import revImg from "../../assets/img/review-img.png";
import nested1 from "../../assets/img/nested-img-1.png";
import nested2 from "../../assets/img/nested-img-2.png";
import bag from "../../assets/img/bag.png";
import mark from "../../assets/icons/sub-mark.png";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";

export const Home = () => {
  return (
    <>
      <div className={styles.desktopBooksWrapper}>
        {/* bestSellers for desktop */}
        <div className={styles.bestSellers}>
          <div className={classNames("mainContainer", styles.flexCardsWrapper)}>
            <div className={styles.bestSellerCard}>
              <div className={styles.imgBlock}>
                <img src={cardImage} alt="does not exist" />
              </div>
              <div className={styles.aboutBlock}>
                Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                առաջին դեմքով
              </div>
            </div>
            <div className={styles.bestSellerCard}>
              <div className={styles.imgBlock}>
                <img src={cardImage} alt="does not exist" />
              </div>
              <div className={styles.aboutBlock}>
                Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                առաջին դեմքով
              </div>
            </div>
            <div className={styles.bestSellerCard}>
              <div className={styles.imgBlock}>
                <img src={cardImage} alt="does not exist" />
              </div>
              <div className={styles.aboutBlock}>
                Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                առաջին դեմքով
              </div>
            </div>
          </div>
        </div>
        <div className={styles.others}>
          <div className="mainContainer">
            <div className={styles.otherWrapper}>
              <div className={styles.otherCard}>
                <div className={styles.otherCardWrapper}>
                  <div className={styles.otherImgBlock}>
                    <img src={minCard} alt="other" />
                  </div>
                  <div className={styles.otherAboutBlock}>
                    Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                    ընտանիքի օրինակով
                  </div>
                </div>
              </div>
              <div className={styles.otherCard}>
                <div className={styles.otherCardWrapper}>
                  <div className={styles.otherImgBlock}>
                    <img src={minCard} alt="other" />
                  </div>
                  <div className={styles.otherAboutBlock}>
                    Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                    ընտանիքի օրինակով
                  </div>
                </div>
              </div>
              <div className={styles.otherCard}>
                <div className={styles.otherCardWrapper}>
                  <div className={styles.otherImgBlock}>
                    <img src={minCard} alt="other" />
                  </div>
                  <div className={styles.otherAboutBlock}>
                    Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                    ընտանիքի օրինակով
                  </div>
                </div>
              </div>
              <div className={styles.otherCard}>
                <div className={styles.otherCardWrapper}>
                  <div className={styles.otherImgBlock}>
                    <img src={minCard} alt="other" />
                  </div>
                  <div className={styles.otherAboutBlock}>
                    Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                    ընտանիքի օրինակով
                  </div>
                </div>
              </div>
              <div className={styles.otherCard}>
                <div className={styles.otherCardWrapper}>
                  <div className={styles.otherImgBlock}>
                    <img src={minCard} alt="other" />
                  </div>
                  <div className={styles.otherAboutBlock}>
                    Բաքվի ջարդերի ու հայատյացության մասին՝ առաջին դեմքից և մի
                    ընտանիքի օրինակով
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bestSellers for max-width-1024 */}

      <div className={styles.minBestSellers}>
        <div className="mainContainer">
          <div className={styles.minBestWrapper}>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
            <div className={styles.minBestCard}>
              <div className={styles.bestCardWrapper}>
                <div className={styles.minImg}>
                  <img src={minBestImg} alt="empty" />
                </div>
                <div className={styles.minAbout}>
                  Արժեք ստեղծող և ճաշակ ձևավորող մարդկանց ոչ ձանձրալի մտքերն՝
                  առաջին դեմքով
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.allBooks}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր կարծիքները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.booksArrow} alt="empty" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bestSellers for max-width-1024 */}

      <div className={styles.articleWrapper}>
        <div className="mainContainer">
          <div className={styles.articleBlock}>
            <div className={styles.title}>Հոդվածներ</div>
            <div className={styles.allArticles}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր հոդվածները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.articleCardsWrapper}>
              <div className={styles.articleCardWrapper}>
                <div className={styles.articleCard}>
                  <div className={styles.articleCardImg}>
                    <img src={articleImg} alt="emty" />
                  </div>
                  <div className={styles.articalCardDesc}>
                    Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
                    կանոնագիրք» գործի հեղինակը (տեսանյութ)
                  </div>
                </div>
              </div>
              <div className={styles.articleCardWrapper}>
                <div className={styles.articleCard}>
                  <div className={styles.articleCardImg}>
                    <img src={articleImg} alt="emty" />
                  </div>
                  <div className={styles.articalCardDesc}>
                    Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
                    կանոնագիրք» գործի հեղինակը (տեսանյութ)
                  </div>
                </div>
              </div>
              <div className={styles.articleCardWrapper}>
                <div className={styles.articleCard}>
                  <div className={styles.articleCardImg}>
                    <img src={articleImg} alt="emty" />
                  </div>
                  <div className={styles.articalCardDesc}>
                    Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
                    կանոնագիրք» գործի հեղինակը (տեսանյութ)
                  </div>
                </div>
              </div>
              <div className={styles.articleCardWrapper}>
                <div className={styles.articleCard}>
                  <div className={styles.articleCardImg}>
                    <img src={articleImg} alt="emty" />
                  </div>
                  <div className={styles.articalCardDesc}>
                    Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
                    կանոնագիրք» գործի հեղինակը (տեսանյութ)
                  </div>
                </div>
              </div>
              <div className={styles.articleCardWrapper}>
                <div className={styles.articleCard}>
                  <div className={styles.articleCardImg}>
                    <img src={articleImg} alt="emty" />
                  </div>
                  <div className={styles.articalCardDesc}>
                    Ով է 2022-ի ամենաէսթետիկ բեսթսելլերի՝ «Մաշկի խնամքի
                    կանոնագիրք» գործի հեղինակը (տեսանյութ)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.attentionNeedWrapper}>
        <div className="mainContainer">
          <div className={styles.attentionBlock}>
            <div className={styles.title}>Ուշադրության արժանի</div>
            <div className={styles.allArticles}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր ապրանքները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.attentionCardsWrapper}>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ sadasdasdas</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.attentionCard}>
                <div className={styles.attentionImg}>
                  <img src={attentionImg} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Նորմալ մարդիկ</h4>
                  <p>Սալի Ռունի</p>
                  <span>5800 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.catalogsWrapper}>
        <div className="mainContainer">
          <div className={styles.catalogBlock}>
            <div className={styles.title}>Մատենաշարեր</div>
            <div className={styles.allCatalogs}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր ապրանքները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.catalogCardsWrapper}>
              <div className={styles.catalogCard}>
                <div className={styles.catalogImg}>
                  <div className={styles.firstNestedImg}>
                    <img src={nested1} alt="empty" />
                  </div>
                  <div className={styles.secondNestedImg}>
                    <img src={nested2} alt="empty" />
                  </div>
                </div>
                <div className={styles.info}>
                  <h4>Լռակյաց հիվանդը ...</h4>
                  <p>Ալեքս Մայքլիդիս</p>
                  <span>9500 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.catalogCard}>
                <div className={styles.catalogImg}>
                  <div className={styles.firstNestedImg}>
                    <img src={nested1} alt="empty" />
                  </div>
                  <div className={styles.secondNestedImg}>
                    <img src={nested2} alt="empty" />
                  </div>
                </div>
                <div className={styles.info}>
                  <h4>Լռակյաց հիվանդը ...</h4>
                  <p>Ալեքս Մայքլիդիս</p>
                  <span>9500 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.catalogCard}>
                <div className={styles.catalogImg}>
                  <div className={styles.firstNestedImg}>
                    <img src={nested1} alt="empty" />
                  </div>
                  <div className={styles.secondNestedImg}>
                    <img src={nested2} alt="empty" />
                  </div>
                </div>
                <div className={styles.info}>
                  <h4>Լռակյաց հիվանդը ...</h4>
                  <p>Ալեքս Մայքլիդիս</p>
                  <span>9500 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.catalogCard}>
                <div className={styles.catalogImg}>
                  <div className={styles.firstNestedImg}>
                    <img src={nested1} alt="empty" />
                  </div>
                  <div className={styles.secondNestedImg}>
                    <img src={nested2} alt="empty" />
                  </div>
                </div>
                <div className={styles.info}>
                  <h4>Լռակյաց հիվանդը ...</h4>
                  <p>Ալեքս Մայքլիդիս</p>
                  <span>9500 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
              <div className={styles.catalogCard}>
                <div className={styles.catalogImg}>
                  <div className={styles.firstNestedImg}>
                    <img src={nested1} alt="empty" />
                  </div>
                  <div className={styles.secondNestedImg}>
                    <img src={nested2} alt="empty" />
                  </div>
                </div>
                <div className={styles.info}>
                  <h4>Լռակյաց հիվանդը ...</h4>
                  <p>Ալեքս Մայքլիդիս</p>
                  <span>9500 ֏</span>
                </div>
                <button>Դիտել</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bagsWrapper}>
        <div className="mainContainer">
          <div className={styles.bagBlock}>
            <div className={styles.title}>Մատենաշարեր</div>
            <div className={styles.allBags}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր ապրանքները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.bagCardsWrapper}>
              <div className={styles.bagCard}>
                <div className={styles.bagImg}>
                  <img src={bag} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Newmag 1</h4>
                  <span>5000 ֏</span>
                  <button>Դիտել</button>
                </div>
              </div>
              <div className={styles.bagCard}>
                <div className={styles.bagImg}>
                  <img src={bag} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Newmag 1</h4>
                  <span>5000 ֏</span>
                  <button>Դիտել</button>
                </div>
              </div>
              <div className={styles.bagCard}>
                <div className={styles.bagImg}>
                  <img src={bag} alt="" />
                </div>
                <div className={styles.info}>
                  <h4>Newmag 1</h4>
                  <span>5000 ֏</span>
                  <button>Դիտել</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mediaAnalysisWrapper}>
        <div className="mainContainer">
          <div className={styles.mediaBlock}>
            <div className={styles.title}>Մեդիալուսաբանում</div>
            <div className={styles.allMedias}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր հոդվածները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.mediaCardsWrapper}>
              <div className={styles.mediaCard}>
                <div className={styles.mediaTitle}>
                  <span className={styles.titleIcon}>
                    <img src={mark} alt="empty" />
                  </span>
                  <p>Shamshyan</p>
                </div>

                <div className={styles.about}>
                  Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով».
                  exclusivelife.am
                </div>

                <div className={styles.readMore}>
                  <p>Կարդալ ավելին</p>
                  <span className="">
                    <ArrowRight className={styles.readArrow} alt="empty" />
                  </span>
                </div>
              </div>
              <div className={styles.mediaCard}>
                <div className={styles.mediaTitle}>
                  <span className={styles.titleIcon}>
                    <img src={mark} alt="empty" />
                  </span>
                  <p>Shamshyan</p>
                </div>

                <div className={styles.about}>
                  Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով».
                  exclusivelife.am
                </div>

                <div className={styles.readMore}>
                  <p>Կարդալ ավելին</p>
                  <span className="">
                    <ArrowRight className={styles.readArrow} alt="empty" />
                  </span>
                </div>
              </div>
              <div className={styles.mediaCard}>
                <div className={styles.mediaTitle}>
                  <span className={styles.titleIcon}>
                    <img src={mark} alt="empty" />
                  </span>
                  <p>Shamshyan</p>
                </div>

                <div className={styles.about}>
                  Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով».
                  exclusivelife.am
                </div>

                <div className={styles.readMore}>
                  <p>Կարդալ ավելին</p>
                  <span className="">
                    <ArrowRight className={styles.readArrow} alt="empty" />
                  </span>
                </div>
              </div>
              <div className={styles.mediaCard}>
                <div className={styles.mediaTitle}>
                  <span className={styles.titleIcon}>
                    <img src={mark} alt="empty" />
                  </span>
                  <p>Shamshyan</p>
                </div>

                <div className={styles.about}>
                  Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով».
                  exclusivelife.am
                </div>

                <div className={styles.readMore}>
                  <p>Կարդալ ավելին</p>
                  <span className="">
                    <ArrowRight className={styles.readArrow} alt="empty" />
                  </span>
                </div>
              </div>
              <div className={styles.mediaCard}>
                <div className={styles.mediaTitle}>
                  <span className={styles.titleIcon}>
                    <img src={mark} alt="empty" />
                  </span>
                  <p>Shamshyan</p>
                </div>

                <div className={styles.about}>
                  Տեսահոլովակի պրեմիերա․ Սյուզաննա Մելքոնյան - «Մեռնել սիրելով».
                  exclusivelife.am
                </div>

                <div className={styles.readMore}>
                  <p>Կարդալ ավելին</p>
                  <span className="">
                    <ArrowRight className={styles.readArrow} alt="empty" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.reviewsWrapper}>
        <div className="mainContainer">
          <div className={styles.reviewsBlock}>
            <div className={styles.title}>Կարծիքներ</div>
            <div className={styles.allReviews}>
              <div>
                <span className={styles.arrowTitle}>Բոլոր կարծիքները</span>
                <span className={styles.rightArrow}>
                  <ArrowRight className={styles.forwardIcon} alt="empty" />
                </span>
              </div>
            </div>
            <div className={styles.reviewCardsWrapper}>
              <div className={styles.reviewCard}>
                <div className={styles.imgBlock}>
                  <img src={revImg} alt="empty" />
                </div>
                <div className={styles.contentBlock}>
                  <p className={styles.contentText}>
                    Շատ հետաքրքիր բացահայտումներ կարելի է անել կարդալով այս
                    գիրքը։
                  </p>
                  <p className={styles.contentAuthor}>Սիլվա Ծատուրյան</p>
                  <span>22/08/2022</span>
                </div>
              </div>
              <div className={styles.reviewCard}>
                <div className={styles.imgBlock}>
                  <img src={revImg} alt="empty" />
                </div>
                <div className={styles.contentBlock}>
                  <p className={styles.contentText}>
                    Շատ հետաքրքիր բացահայտումներ կարելի է անել կարդալով այս
                    գիրքը։
                  </p>
                  <p className={styles.contentAuthor}>Սիլվա Ծատուրյան</p>
                  <span>22/08/2022</span>
                </div>
              </div>
              <div className={styles.reviewCard}>
                <div className={styles.imgBlock}>
                  <img src={revImg} alt="empty" />
                </div>
                <div className={styles.contentBlock}>
                  <p className={styles.contentText}>
                    Շատ հետաքրքիր բացահայտումներ կարելի է անել կարդալով այս
                    գիրքը։
                  </p>
                  <p className={styles.contentAuthor}>Սիլվա Ծատուրյան</p>
                  <span>22/08/2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
