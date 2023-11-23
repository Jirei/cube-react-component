[cube-react-component](../README.md) / [Exports](../modules.md) / CubeProps

# Interface: CubeProps

## Table of contents

### Properties

- [breakpointsToSizes](CubeProps.md#breakpointstosizes)
- [containerAdditionalClasses](CubeProps.md#containeradditionalclasses)
- [containerAdditionalProps](CubeProps.md#containeradditionalprops)
- [cubeAdditionalClasses](CubeProps.md#cubeadditionalclasses)
- [cubeAdditionalProps](CubeProps.md#cubeadditionalprops)
- [cubeFaceAdditionalClasses](CubeProps.md#cubefaceadditionalclasses)
- [cubeFaceAdditionalProps](CubeProps.md#cubefaceadditionalprops)
- [cubeFaces](CubeProps.md#cubefaces)
- [currentFace](CubeProps.md#currentface)
- [perspective](CubeProps.md#perspective)
- [sceneAdditionalClasses](CubeProps.md#sceneadditionalclasses)
- [sceneAdditionalProps](CubeProps.md#sceneadditionalprops)
- [transitionDuration](CubeProps.md#transitionduration)
- [transitionTimingFunction](CubeProps.md#transitiontimingfunction)

## Properties

### breakpointsToSizes

• `Optional` **breakpointsToSizes**: `Partial`\<`undefined` \| `Record`\<`"base"` \| `"sm"` \| `"md"` \| `"lg"` \| `"xl"` \| `"2xl"`, `string`\>\>

Optional breakpoint-to-size object that is used to set the size of the cube directly in the parameters of the component.

There are 2 ways to set the size of the cube: (The default behavior if any of the two ways isn't used is explained at the end in point `3.`).

1.  Sizing with the `breakpointsToSizes` object

2.  Sizing with custom breakpoints and a CSS variable

3.  (Default behavior)

### 1\. Sizing with the `breakpointsToSizes` object and default Tailwind breakpoints (using this parameter)

The breakpoints used are the default ones from Tailwind + there is a `base` breakpoint to target everything below the `sm` breakpoint.
The default value for the base breakpoint is `65vw` and will be used for the default of the ones higher until you provide your own one. At that point it's your own that will be used as the default for the higher breakpoints if you don't provide them.

Using this parameter (`breakpointsToSizes`) to set the size of the cube is a quick & easy solution if you use the default Tailwind breakpoints in your project.

**Examples**:

1. Example with complete `breakpointsToSizes` object

```
{
 'base':'75vw', // the cube will have a width of 75vw when screen width from 0px to 639px
 'sm':'65vw', // the cube will have a width of 65vw when screen width from 640px to 767px
 'md':'35vw', // the cube will have a width of 35vw when screen width from 768px to 1023px
 'lg':'30vw', // the cube will have a width of 30vw when screen width from 1024px to 1279px
 'xl':'25vw', // the cube will have a width of 25vw when screen width from 1280px to 1535px
 '2xl':'20vw' // the cube will have a width of 20vw when screen width from 1536px  to no upper limit
}
```

2. Example with `breakpointsToSizes` object missing values

```
{
 // 'base' breakpoint not provided, will take the default value of 65vw from 0px to 639px, equivalent of 'base':'65vw';
 // 'sm' breakpoint not provided, will take the value from the nearest lower breakpoint, here '65vw'
 'md':'35vw', // 'md' is provided, the cube will have a width of 35vw when screen width from 768px to 1023px
 // 'lg' breakpoint not provided, will take the value from the nearest lower breakpoint, here '35vw' from 1024px to 1279px
 'xl':'25vw', // 'xl' is provided, the cube will have a width of 25vw when screen width from 1280px to 1535px
 '2xl':'20vw' // '2xl' is provided, the cube will have a width of 20vw when screen width from 1536px  to no upper limit
}
```

### 2. Sizing with custom breakpoints and a CSS variable

If you want custom breakpoints, you should set the `--cube-css-size` CSS variable on the cube or any wrapping component above with your own breakpoints.

Look at this [documentation section](https://documentation.com#css-custom) to read more about how to use your own breakpoints and provide the size with a CSS variable.

### 3. Behavior when `breakpoint-to-size` object not provided and no custom breakpoints & CSS variable

if `breakpointsToSizes` is not provided (or has the value `undefined`) and the self-controlled cube size CSS variable is not set, the cube will use its own set of default values.

Default values:

```
{
 'base':'65vw',
 'sm':'60vw',
 'md':'50vw',
 'lg':'40vw',
 'xl':'30vw',
 '2xl':'25vw'
}
```

It is not recommended to rely on this behavior. It's mostly here to be able to see the cube for discovery purposes without having to provide sizes immediately.

#### Defined in

[cube.tsx:169](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L169)

---

### containerAdditionalClasses

• `Optional` **containerAdditionalClasses**: `string`

String of CSS classes you can have added to the container classes. Refer to the [github repository](https://github.com/Jirei/cube-react-component) to learn what is the container.

```
<div
  className={'container-internal-class-1 container-internal-class-2' + ' ' containerAdditionalClasses}
>child components...</div>
```

#### Defined in

[cube.tsx:225](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L225)

---

### containerAdditionalProps

• `Optional` **containerAdditionalProps**: `Record`\<`string`, `any`\>

Object with props to add to the container. Refer to the [github repository](https://github.com/Jirei/cube-react-component) to learn what is the container.

```
<div
  {...containerAdditionalProps} {...otherProps}
>child components...</div>
```

#### Defined in

[cube.tsx:258](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L258)

---

### cubeAdditionalClasses

• `Optional` **cubeAdditionalClasses**: `string`

String of CSS classes you can have added to the cube classes.

```
<div
  className={'cube-internal-class-1 cube-internal-class-2' + ' ' cubeAdditionalClasses}
>child components...</div>
```

#### Defined in

[cube.tsx:241](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L241)

---

### cubeAdditionalProps

• `Optional` **cubeAdditionalProps**: `Record`\<`string`, `any`\>

Object with props to add to the cube.

```
<div // cube
  {...cubeAdditionalProps} {...otherProps}
>child components...</div>
```

#### Defined in

[cube.tsx:275](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L275)

---

### cubeFaceAdditionalClasses

• `Optional` **cubeFaceAdditionalClasses**: `string`

String of CSS classes you can have added to the faces classes.

```
<div
  className={'face-internal-class-1 face-internal-class-2' + ' ' faceAdditionalClasses}
>child components...</div>
```

#### Defined in

[cube.tsx:249](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L249)

---

### cubeFaceAdditionalProps

• `Optional` **cubeFaceAdditionalProps**: `Record`\<`string`, `any`\>

Object with props to add to the face.

```
<div // face
  {...faceAdditionalProps} {...otherProps}
>child components...</div>
```

#### Defined in

[cube.tsx:283](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L283)

---

### cubeFaces

• **cubeFaces**: `Object`

The 6 faces you want the cube to have. Provide an object with the following form:

```
 const cubeFaces = {
front: <p>Anything React Can Render</p>,
right: <p>Anything React Can Render</p>,
back: <p>Anything React Can Render</p>,
left: <p>Anything React Can Render</p>,
top: <p>Anything React Can Render</p>,
bottom: <p>Anything React Can Render</p>;
}
```

Obviously if you provide that kind of faces, it will not look great. Try to have faces that take the full width and height to have a nice cube in the end. The main use case in mind was a cube carousel for showing images.
Refer to the demo example in the [github repository](https://github.com/Jirei/cube-react-component) if necessary.

#### Type declaration

| Name     | Type        |
| :------- | :---------- |
| `back`   | `ReactNode` |
| `bottom` | `ReactNode` |
| `front`  | `ReactNode` |
| `left`   | `ReactNode` |
| `right`  | `ReactNode` |
| `top`    | `ReactNode` |

#### Defined in

[cube.tsx:208](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L208)

---

### currentFace

• **currentFace**: `"front"` \| `"right"` \| `"back"` \| `"left"` \| `"top"` \| `"bottom"`

Face you want the cube to show. Change this parameter to make the cube move and make it show the face selected (the move is animated of course).

Must be one of : `front` | `right` | `back` | `left` | `top` | `bottom`

An array with these values is exported from this module for your convenience, can be imported this way:

```
import { facesNames } from 'cube-react-component'; // facesNames is ['front', 'right', 'back', 'left', 'top', 'bottom'] (readonly)
```

You can also import the `CubeFace` type:

```
import { CubeFace } from 'cube-react-component'; // type CubeFace = "front" | "right" | "back" | "left" | "top" | "bottom"`
```

Can be used to type your code with it in TypeScript. For example with useState() from React:

```
const [currentFace, setCurrentFace] = useState<CubeFace>('front'); // This state will only accept any of the correct faces for this parameter, perfect!
```

#### Defined in

[cube.tsx:191](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L191)

---

### perspective

• `Optional` **perspective**: `string`

Perspective if you want to add one. Default to `none`.

**Example Values**: `none` `800px` `23rem` `5.5cm`

Refer to the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) and this [explanation](https://3dtransforms.desandro.com/perspective) for more details.

#### Defined in

[cube.tsx:217](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L217)

---

### sceneAdditionalClasses

• `Optional` **sceneAdditionalClasses**: `string`

String of CSS classes you can have added to the scene classes. Refer to the [github repository](https://github.com/Jirei/cube-react-component) to learn what is the scene.

```
<div
  className={'scene-internal-class-1 scene-internal-class-2' + ' ' sceneAdditionalClasses}
>child components...</div>
```

#### Defined in

[cube.tsx:233](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L233)

---

### sceneAdditionalProps

• `Optional` **sceneAdditionalProps**: `Record`\<`string`, `any`\>

Object with props to add to the scene. Refer to the [github repository](https://github.com/Jirei/cube-react-component) to learn what is the scene.

```
<div // container
  {...containerAdditionalProps} {...otherProps}
>child components...</div>
```

#### Defined in

[cube.tsx:267](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L267)

---

### transitionDuration

• `Optional` **transitionDuration**: `string`

Duration of the transition between the faces.

Default to one second.

(Use the unit `s` for seconds and `ms` for milliseconds.)

**Examples**:

`0s` `1.5s` `6s` `0ms` `150.25ms` `6000ms`

Refer to the [\<time\> MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/time) for more details about the accepted values.

#### Defined in

[cube.tsx:86](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L86)

---

### transitionTimingFunction

• `Optional` **transitionTimingFunction**: `string`

CSS Transition timing function used for the transition between the faces.

Default to `cubic-bezier(0.4, 0, 0.2, 1)`.

**Examples**:

`linear` `ease-in-out` `cubic-bezier(0.4, 0, 0.2, 1)`

Refer to the [transition-timing-function MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) for more details about the accepted values.

#### Defined in

[cube.tsx:98](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L98)
