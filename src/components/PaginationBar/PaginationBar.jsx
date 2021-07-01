import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineEllipsis,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
} from 'react-icons/ai';
import classNames from 'classnames';
import styles from './PaginationBar.module.css';

const PaginationBar = ({
  amount,
  step,
  range,
  onRangeChange,
  onStepChange,
}) => {
  const activeButtonClass = classNames(styles.button, styles.active);
  const renderButtons = () => {
    const pages = Math.ceil(amount / range);
    if (pages < 5) {
      const rendered = [];
      for (let i = 1; i <= pages; i += 1) {
        rendered.push(
          <button
            className={i === step ? activeButtonClass : styles.button}
            type="button"
            onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
          >
            {i}
          </button>,
        );
      }
      return rendered;
    }
    if (pages >= 5) {
      if (step !== 1 && step !== pages) {
        if (step === 2) {
          return (
            <>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step - 1)}
              >
                <AiOutlineLeft />
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(1)}
              >
                1
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={activeButtonClass}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step + 1}
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {Math.ceil(amount / range)}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step + 1)}
              >
                <AiOutlineRight />
              </button>
            </>
          );
        }
        if (step === pages - 1) {
          return (
            <>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step - 1)}
              >
                <AiOutlineLeft />
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(1)}
              >
                1
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step - 1}
              </button>
              <button
                className={activeButtonClass}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step}
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {Math.ceil(amount / range)}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step + 1)}
              >
                <AiOutlineRight />
              </button>
            </>
          );
        }
        return (
          <>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft />
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(1)}
            >
              1
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 1}
            </button>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 1}
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {Math.ceil(amount / range)}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight />
            </button>
          </>
        );
      }
      if (step === 1) {
        return (
          <>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 1}
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {Math.ceil(amount / range)}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight />
            </button>
          </>
        );
      }
      if (step === pages) {
        return (
          <>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft />
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(1)}
            >
              1
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 1}
            </button>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
          </>
        );
      }
    }
    if (pages >= 7) {
      if (step !== 1 && step !== pages) {
        if (step === 2) {
          return (
            <>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step - 1)}
              >
                <AiOutlineLeft />
              </button>
              <button className={styles.button} type="button">1</button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step - 1}
              </button>
              <button
                className={activeButtonClass}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step + 1}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step + 2}
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {Math.ceil(amount / range)}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step + 1)}
              >
                <AiOutlineRight />
              </button>
            </>
          );
        }
        if (step === pages - 1) {
          return (
            <>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step - 1)}
              >
                <AiOutlineLeft />
              </button>
              <button className={styles.button} type="button">1</button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step - 2}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step - 1}
              </button>
              <button
                className={activeButtonClass}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {step + 1}
              </button>
              <div className={styles.gap}>
                <AiOutlineEllipsis />
              </div>
              <button
                className={styles.button}
                type="button"
                onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
              >
                {Math.ceil(amount / range)}
              </button>
              <button
                className={styles.button}
                type="button"
                onClick={() => onStepChange(step + 1)}
              >
                <AiOutlineRight />
              </button>
            </>
          );
        }
        return (
          <>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft />
            </button>
            <button className={styles.button} type="button">1</button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 2}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 1}
            </button>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 1}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 2}
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {Math.ceil(amount / range)}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight />
            </button>
          </>
        );
      }
      if (step === 1) {
        return (
          <>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 1}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step + 2}
            </button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {Math.ceil(amount / range)}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step + 1)}
            >
              <AiOutlineRight />
            </button>
          </>
        );
      }
      if (step === pages) {
        return (
          <>
            <button
              className={styles.button}
              type="button"
              onClick={() => onStepChange(step - 1)}
            >
              <AiOutlineLeft />
            </button>
            <button className={styles.button} type="button">1</button>
            <div className={styles.gap}>
              <AiOutlineEllipsis />
            </div>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 2}
            </button>
            <button
              className={styles.button}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step - 1}
            </button>
            <button
              className={activeButtonClass}
              type="button"
              onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
            >
              {step}
            </button>
          </>
        );
      }
    }
    return <></>;
  };

  return (
    <section className={styles.container}>
      <div className={styles.bar}>
        <span className={styles.counter}>
          {step * range > amount ? `${(step - 1) * range + 1}-${amount} of ${amount} items` : `${(step - 1) * range + 1}-${step * range} of ${amount} items`}
        </span>
        <div className={styles.pages}>
          {renderButtons()}
          {/* <button className={styles.button} type="button">
            <AiOutlineLeft />
          </button>
          <button className={styles.button} type="button">1</button>
          <div className={styles.gap}>
            <AiOutlineEllipsis />
          </div>
          <button className={styles.button} type="button">
            4
          </button>
          <button className={styles.button} type="button">
            5
          </button>
          <button className={`${styles.button} ${styles.active}`} type="button">
            6
          </button>
          <button className={styles.button} type="button">
            7
          </button>
          <button className={styles.button} type="button">
            8
          </button>
          <div className={styles.gap}>
            <AiOutlineEllipsis />
          </div>
          <button
            className={styles.button}
            type="button"
            onClick={(e) => onStepChange(parseInt(e.target.textContent, 10))}
          >
            {Math.ceil(amount / range)}
          </button>
          <button className={styles.button} type="button">
            <AiOutlineRight />
          </button> */}
        </div>
        <div className={styles.format}>
          <AiOutlineDown className={styles.dropdown} />
          <select
            className={styles.select}
            onChange={(e) => onRangeChange(parseInt(e.target.value, 10))}
          >
            <option value={10}>10/page</option>
            <option value={15}>15/page</option>
            <option value={20}>20/page</option>
          </select>
        </div>
      </div>
    </section>
  );
};

PaginationBar.propTypes = {
  amount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default PaginationBar;
