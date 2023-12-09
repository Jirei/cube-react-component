# Cube React Component

## 3D Cube component made with React, ideal for a cool gallery

### Here is a GIF of the cube in the demo so that you can see what it looks like at a glance (the actual demo is live, customizable and is accompanied by a builder: [open the demo page](www.example.com)):

![cube demo](assets/cube-demo.gif)


### _Cube react component_ is a cool 3D react cube component.
 **If you want to showcase some photos in an original way, give it a try.**  

Either continue to read to learn more about this cube component to see if it fits your needs or jump right to the [section](www.example.com) showing how to incorporate it in your app (you can also simply scroll down past the description instead of following the link).
### Description

You can add up to 6 faces to the cube.

The cube is very **customizable**.


You can customize:
- the content of the faces (naturally)
- the current face you want the cube to be showing at an instant T (the logic about when to change the current face is totally up to you, the npm module provides help in the form of exported variables with values and TypeScript types you may want to use when incorporating this component in your app)
- the duration of the transition between the faces
- the CSS transition function used for the transition  
- the perspective used for the animation  
- the size of the cube, either conveniently with an object argument if you want to use the default Tailwind breakpoints, or you can set up your own custom breakpoints by providing a certain CSS variable 

 You can add custom CSS classes and React props to:
- the container
- the scene(wrapper of the inner cube used as an anchor for the animation)
- the inner cube itself
- and the 6 faces. You can easily choose to add things to all the faces at the same time or if you want more granularity, you can target some of them