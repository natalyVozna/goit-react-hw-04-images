import css from './Loader.module.css';

export const Loader = () => {
  return (
    <section className={css.loader}>
      <div className={css.loaderRing}></div>
    </section>
  );
};
