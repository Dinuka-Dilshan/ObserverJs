/**
 *
 * @param {String} id
 * @param {object} styles
 * @author Dinuka Dilshan
 */

const css = (id, styles) => {
  if (Array.isArray(id)) {
    id.map((e) => {
      let elementStyle;

      if (e[0] === "#") {
        try {
          elementStyle = document.getElementById(e.slice(1)).style;
        } catch (error) {
          console.warn(`cannot find the elements with provided id: ${e}`);
        }

        const style = Object.entries(styles);

        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];

          elementStyle[attribute] = value;
        });
      } else if (e[0] === ".") {
        const elementsArray = document.getElementsByClassName(e.slice(1));

        const style = Object.entries(styles);

        for (let x = 0; x < elementsArray.length; x++) {
          style.map((pair) => {
            const attribute = pair[0];
            const value = pair[1];
            elementsArray[x].style[attribute] = value;
          });
        }
      } else {
        const elementsArray = document.getElementsByTagName(e);

        const style = Object.entries(styles);

        for (let x = 0; x < elementsArray.length; x++) {
          style.map((pair) => {
            const attribute = pair[0];
            const value = pair[1];
            elementsArray[x].style[attribute] = value;
          });
        }
      }
    });
  } else {
    let elementStyle;

    if (id[0] === "#") {
      elementStyle = document.getElementById(id.slice(1)).style;

      const style = Object.entries(styles);

      style.map((pair) => {
        const attribute = pair[0];
        const value = pair[1];

        elementStyle[attribute] = value;
      });
    } else if (id[0] === ".") {
      const elementsArray = document.getElementsByClassName(id.slice(1));

      const style = Object.entries(styles);

      for (let x = 0; x < elementsArray.length; x++) {
        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];
          elementsArray[x].style[attribute] = value;
        });
      }
    } else if (id.tagName) {
      for (let [attribute, value] of Object.entries(styles)) {
        id.style[attribute] = value;
      }
    } else {
      const elementsArray = document.getElementsByTagName(id);

      const style = Object.entries(styles);

      for (let x = 0; x < elementsArray.length; x++) {
        style.map((pair) => {
          const attribute = pair[0];
          const value = pair[1];
          elementsArray[x].style[attribute] = value;
        });
      }
    }
  }
};

export default css;
