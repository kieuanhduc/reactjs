### Life cycle trong react
 - Gồm 3 giai đoạn : mouting , updating , unmouting

 + **[Mouting] : 
     chạy contructor -> sau khi render  -> cập nhật lên dom  -> componentDidMount . Chayj 1 lan duy nhat
       
      constructor:    Nơi khai báo state và khai báo các thuộc tính
  
  + **[Updating] : 
    sau khi thay đổi  new props , setState , forceUpdate() -> render -> cập nhật lên dom  -> componentDidUpdate

  + **[Unmouting] : 
    không còn dùng nữa -> componentWillUnmount


--------------------------------
### Tìm hiểu state và setState

- State : là một object chữa các dữ liệu của component -> state thay đổi -> render lại dữ liệu 

### prop và PropTypes trong reactjs

  - prop: dùng khi muốn truyền dữ liệu tù component cha xang component con , component con chỉ muốn render dữ liệu chứ không muốn quản lý . Prop là readonly , k nên thay đổi dữ liệu 

  - tạo 1 component và truyền vào các prop khác nhau thì component sẽ rander ra dữ liệu khau
  
  -


### cách render element trong react

 - boolean , undefined , null, " " => K xuất hiện 


 ### setState

  - setState trong reacthook sử dụng replace thay vì merge như bên class
  - hẫy setState 1 state hoàn toàn mới
  - nếu bạn setState liên tục , hãy truyền vào callback
  - nếu initial state là function , hãy đưa nó vào trong callback


## useEffect 

  - Là 1 hook để thay thế cho lifecycle bên class component
  - nhận vào 2 tham số là effect function và deps array 
  - sẽ có 3 trường hợp là có deps , deps là array , và deps có item [a,b,...]
  - effect function sẽ chạy sau khi render xong 
  - cleanup function sẽ chạy khi component unmount và sẽ chạy trước khi effect function được gọi lại 

### tránh mutate state
  - trả về 1 state hoàn toàn mới

### Các yếu tố ảnh hưởng đến việc render của component trong reactjs
  - component cha render => component con render
  - thay đổi state
  - thay đổi props
  - ép bọ render

### higher order component 
  - là kĩ thuật nâng cao của react nhằm dùng lại logic của component
  - hoc là một function nhận vào 1 component và return một component mới
  - thường được dùng trong các thư viện bên thứ 3 như redux

### react.memo
  - là một hoc giúp ngăn chặn viêch re-render không cần thiết . Ví dụ component cha render => component con render hay props không thay đổi 
  - mặc định dùng shallow comparison cho props
  => Bạn phải đánh đổi giữa tốn bộ nhớ thay cho việc cải thiện hiệu suất

### useMemo 
  - tránh cho việc tính toán lại 1 function lặp đi lặp lại nhiều lần mỗi lần 1 component render
  - mỗi lần component rerender nó sẽ kiểm tra xem giá trị truyền vào của function  , nếu gtri đó k thay đổi thì k rerender, còn k thì nó sẽ tính toán lại và trả về value ,, sao đó caching lại value cho những lần rerender tiếp theo.

### useCallback

### ref,createRef,useRef,forwardRef 
  - ref : là thuộc tính của element tham chiếu đến chính element đó
  - ref nhận vào 1 biến hoặc 1 funtion 
  - ref thường được dùng để truy cập DOM nodes
  - useRef cũng được dùng để lưu 1 biến có thể mutate

  - muốn dùng ref cho 1 component thì dùng forwardRef


  ### useContext
  - giups chia sẻ state và sử dụng được ở nhiều nơi
  + đầu tiên phải định nghĩa một context
  vd const ExampleContext = React.createContext()

  + sau ddos bọc toàn bộ thành phần dom component bằng thẻ Provider , đông thời truyền giá trị mà mình muốn chia sẻ đến các component khác

  <ExampleContext.Provider value={{color:"red"}}>
      <div className = "App">
        <ChildComponent/>
      </div>
  </ExampleContext.Provider>

  như thế đã có thể sử dụng context trong các component con thông qua useContext()

  const ChildComponet  = () => {
    const {Color} = React.useContext(ExampleContext)

    return  <p style={{ color }}>This text is {color}</p>;
  }


### useReducer giups chungs ta cập nhật giá trị mới cho state  