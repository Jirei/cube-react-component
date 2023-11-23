[cube-react-component](README.md) / Exports

# cube-react-component

## Table of contents

### Interfaces

- [CubeProps](interfaces/CubeProps.md)

### Type Aliases

- [CubeFace](modules.md#cubeface)
- [CubeSizeBreakpoint](modules.md#cubesizebreakpoint)

### Variables

- [cubeSizeBreakpoints](modules.md#cubesizebreakpoints)
- [facesNames](modules.md#facesnames)

### Functions

- [Cube](modules.md#cube)

## Type Aliases

### CubeFace

Ƭ **CubeFace**: `UnionTypeFromValuesOfArray`\<typeof [`facesNames`](modules.md#facesnames)\>

#### Defined in

[helpers.ts:22](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/helpers.ts#L22)

---

### CubeSizeBreakpoint

Ƭ **CubeSizeBreakpoint**: `UnionTypeFromValuesOfArray`\<typeof [`cubeSizeBreakpoints`](modules.md#cubesizebreakpoints)\>

#### Defined in

[helpers.ts:20](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/helpers.ts#L20)

## Variables

### cubeSizeBreakpoints

• `Const` **cubeSizeBreakpoints**: readonly [``"base"``, ``"sm"``, ``"md"``, ``"lg"``, ``"xl"``, ``"2xl"``]

#### Defined in

[helpers.ts:2](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/helpers.ts#L2)

---

### facesNames

• `Const` **facesNames**: readonly [``"front"``, ``"right"``, ``"back"``, ``"left"``, ``"top"``, ``"bottom"``]

#### Defined in

[helpers.ts:1](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/helpers.ts#L1)

## Functions

### Cube

▸ **Cube**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                   |
| :--------------- | :------------------------------------- |
| `«destructured»` | [`CubeProps`](interfaces/CubeProps.md) |

#### Returns

`Element`

#### Defined in

[cube.tsx:9](https://github.com/Jirei/cube-react-component/blob/a51f95b/src/cube/cube.tsx#L9)
