
// class LinksTree extends Component{
//   constructor(props){
//     super(props);
//     this.state = {displayDepth: 3,
//     scale: 1,
//     sliderValue: 100};
//     this.handleDisplayDepthChange = this.handleDisplayDepthChange.bind(this);
//   }

//   handleDisplayDepthChange(event){
//     this.setState({displayDepth: event.target.value});
//   }

//   handleScaleSliderChange=(value)=>{
//     this.setState({scale: value.x/100,
//       sliderValue: value.x});
//     console.log(this.state.scale);
//   }

//   render() {
//     return (
//       <div>
//           <label>
//             Глубина отображения:
//             <input type="number" min={1} value={this.state.displayDepth} onChange={this.handleDisplayDepthChange} />
//           </label>
//           <ScaleSlider value={this.state.sliderValue} onChange={this.handleScaleSliderChange}/>
//           {/* <Slider
//             axis="x"
//             x={this.state.sliderValue}
//             onChange={this.handleScaleSliderChange}
//             xmin={30}
//             xmax={300}
//             xstep={10}
//           /> */}
//         <Viewport data={this.props.data} displayDepth={this.state.displayDepth} scale={this.state.scale}/>
//       </div>
//     );
//   }
// }

// function App() {
//   // console.log(data1.children);

//   return (
//     <LinksTree data={data1}/>
//     // <ScaleSlider/>
//   );
// }

// export default App;
