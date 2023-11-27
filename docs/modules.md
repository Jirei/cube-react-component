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

helpers.ts:39

___

### CubeSizeBreakpoint

Ƭ **CubeSizeBreakpoint**: `UnionTypeFromValuesOfArray`\<typeof [`cubeSizeBreakpoints`](modules.md#cubesizebreakpoints)\>

#### Defined in

helpers.ts:35

## Variables

### cubeSizeBreakpoints

• `Const` **cubeSizeBreakpoints**: readonly [``"base"``, ``"sm"``, ``"md"``, ``"lg"``, ``"xl"``, ``"2xl"``]

#### Defined in

helpers.ts:9

___

### facesNames

• `Const` **facesNames**: readonly [``"front"``, ``"right"``, ``"back"``, ``"left"``, ``"top"``, ``"bottom"``]

#### Defined in

helpers.ts:1

## Functions

### Cube

▸ **Cube**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CubeProps`](interfaces/CubeProps.md) |

#### Returns

`Element`

#### Defined in

cube.tsx:9
