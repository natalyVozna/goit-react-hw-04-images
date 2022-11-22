import css from './Loader.module.css';

export const Loader = () => {
  return (
    <section className={css.loader}>
      {/* <div className={css.loaderBox}>
        <div className={css.dot1} />
        <div className={css.dot2} />
        <div className={css.dot3} />
      </div> */}

      <div className={css.loaderRing}></div>
    </section>
  );
};
