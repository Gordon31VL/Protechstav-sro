import css from "./Container.module.scss";

export default function Container({ children, className = "" }) {
    return <div className={`${css.container} ${className}`}>{children}</div>;
}