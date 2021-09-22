# WD_Vize

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Implements the following dependencies: [TailwindCSS](https://tailwindcss.com/), [MaterialUI](https://mui.com/), [MaterialIcons](https://www.npmjs.com/package/@mui/icons-material), and [@Emotion/React, @Emotion/Styled](https://www.npmjs.com/package/@emotion/styled).


# Documentation:

Feedback component submission for [VIZE college prep education management](https://www.linkedin.com/company/vizeapp). I was assigned a Feedback React web component to construct in ReactJS from a Flutter App Figma design. Requirements included minimal dependencies outside of TailwindCSS and MaterialIcons necessary to complete the design. For this project submission, I decided to implement the following design using TypeScript. Project submission is purely Front-End.


## Component Tree:

Ordered list of components in the component tree including each component that is returned. Each sub-directory in the component tree includes an `index{name of sub directory goes here}.ts` file for sorted importing throughout the solution -

- **src:**

- **components:** All components for entire app.

⋅⋅1. **feedbackComponents:** Feedback Component folder (a web page). Contains these files: `Feedback.tsx` - returns main feedback web component.

⋅⋅* **feedbackChildren:** Contains these directories: `formControlChildren`, `subHeaderChildren`, and `subMiddleChildren`. Contains these files: `FormControlBTNS.tsx` - back and submit buttons, `FormHeader.tsx` - returns a back arrow button and header text, `SectionInput.tsx` - Returns section input component, `SubHeaderText.tsx` - returns sub header text component on the form, `SubMiddleText.tsx` - returns text in between section and text area. `TextAreaInput.tsx` - Returns text area input component.

⋅⋅* **formControlChildren:** Contains these files: `FormBTN.tsx` - Re-usable component to render back/submit buttons.

⋅⋅* **subHeaderChildren:** Contains these files: `InfoText.tsx` - Re-usable component returning the text for the `subHeaderText.tsx` file.

⋅⋅* **subMiddleChildren** Contains these files: `InfoSubText.tsx` - Re-usable component returning the text for the `subMiddleText.tsx` file.

⋅⋅2. **globalComponents:** Components that can be accessed by other web page components. Contains these directories: `headerComponents` and `navFooterComponents`.

⋅⋅* **headerComponents** Contains these files: `BackArrowBTN.tsx` - Globally re-usable back arrow button for web component files that require this button. `HeaderText.tsx` - Globally re-usable Header text for web component files that require this header.

⋅⋅* **navFooterComponents** Contains these files: `NavFooter.tsx` - Returns a globally re-usable end user navigation selection menu for Home, Search, and End-User's Profile.
