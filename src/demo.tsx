import { Cube, CubeFace } from './cube';
import { useState } from 'react';
import templeWaterImage from './assets/compressed_cube_images/temple-water.jpg';
import templeImage from './assets/compressed_cube_images/temple.jpg';
import temple2Image from './assets/compressed_cube_images/temple-2.jpg';
import elephantsImage from './assets/compressed_cube_images/elephants.jpg';
import cookingImage from './assets/compressed_cube_images/cooking.jpg';
import statueImage from './assets/compressed_cube_images/statue.jpg';

export default function Demo() {
  const [currentFace, setCurrentFace] = useState<CubeFace>('front');
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCurrentFace(e.target.value as CubeFace);
  return (
    <div className='flex items-center justify-center bg-[#F5E1C6] h-screen'>
      <div className='flex flex-col items-center gap-y-32 gap-x-32'>
        <Cube
          breakpointsToSizes={{
            xl: '30vw',
          }}
          currentFace={currentFace}
          cubeFaces={{
            front: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={templeWaterImage}
                  alt='Temple and Water Image'
                />
              </div>
            ),
            right: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={templeImage}
                  alt='Temple Image 1'
                />
              </div>
            ),
            back: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={temple2Image}
                  alt='Temple Image 2'
                />
              </div>
            ),
            left: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={elephantsImage}
                  alt='Startup Image'
                />
              </div>
            ),
            top: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={cookingImage}
                  alt='Cooking Image'
                />
              </div>
            ),
            bottom: (
              <div className='w-full h-full'>
                <img
                  className='absolute object-cover w-full h-full'
                  src={statueImage}
                  alt='startup image'
                />
              </div>
            ),
          }}
        />
        <form className='text-black'>
          <ul>
            <li className='flex gap-x-3'>
              <label htmlFor='front'>front</label>
              <input
                onChange={handleRadioChange}
                id='front'
                type='radio'
                name='rotate-cube-side'
                value='front'
                checked={currentFace === 'front'}
              />
            </li>
            <li className='flex gap-x-3'>
              <label htmlFor='right'>right</label>
              <input
                onChange={handleRadioChange}
                id='right'
                type='radio'
                name='rotate-cube-side'
                value='right'
                checked={currentFace === 'right'}
              />
            </li>
            <li className='flex gap-x-3'>
              <label htmlFor='back'>back</label>
              <input
                onChange={handleRadioChange}
                id='back'
                type='radio'
                name='rotate-cube-side'
                value='back'
                checked={currentFace === 'back'}
              />
            </li>
            <li className='flex gap-x-3'>
              <label htmlFor='left'>left</label>
              <input
                onChange={handleRadioChange}
                id='left'
                type='radio'
                name='rotate-cube-side'
                value='left'
                checked={currentFace === 'left'}
              />
            </li>
            <li className='flex gap-x-3'>
              <label htmlFor='top'>top</label>
              <input
                onChange={handleRadioChange}
                id='top'
                type='radio'
                name='rotate-cube-side'
                value='top'
                checked={currentFace === 'top'}
              />
            </li>
            <li className='flex gap-x-3'>
              <label htmlFor='bottom'>bottom</label>
              <input
                onChange={handleRadioChange}
                id='bottom'
                type='radio'
                name='rotate-cube-side'
                value='bottom'
                checked={currentFace === 'bottom'}
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
