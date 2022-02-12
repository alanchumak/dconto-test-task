import {Viewport} from './Viewport';
import {ScaleSlider} from './ScaleSlider';
import { DisplayDepthBar } from './DisplayDepthBar';


export const LinksTreeControl = () => {
  return(
    <div>
      <DisplayDepthBar/>
      <ScaleSlider/>
      <Viewport/>
    </div>
  )
}
