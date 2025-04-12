
        // //cosole.log() => cách để ta có thể in ra giá trị nào đấy bảng console
        // console.log("hello world");

       
        // // kiểu dữ liệu trong javascript: chuỗi(string): chứa nhiều ký tự với nhay và để trong"", ''

        // console.log(typeof"tên tôi là đạt");
        // console.log("12343242423!@#$&@");
        // console.log('"abc"')
        // console.log("'abc'")
        // console.log(" I" + " Love" + " MindX")
        // // , số(number)
        
        // console.log("My age is: " +  123)
        // console.log(-10)
        // console.log(8.9)
        // // , tru/false(boolean)
        // console.log("true")
        // console.log(typeof true)
        // console.log("false")

        // // undefined , null, object, 
        // // cách để kiểu dữ liệu 
        // // typeof

        // // 3. khai báo biến trong JS:
        // // biến là đại diện cho 1 trường dữ liệu nào đó và nó sẽ giúp ng đọc dễ hiểu hơn
        // // công thức: let/const/vả tên_biến = giá trị nào đó
        // // các ký tự để lhai báo biến là let, var, const
        // let address = "viet nam"
        // // Update giá trị của biến
        // address = " Nc ngoài"
        // console.log(address)

        // console.log("tôi đang ở " + address + ". Nhà của tôi rất đẹp")

        // console.log(`tôi đang ở ${address}. Nhà của tôi rất đẹp`)

        // console.log("tôi đang ở " + address)

        // //bt
        // // let name = "Nguyễn Tấn Đạt, "
        // // let age = 14
        // // let study = " MindX. "
        // // let friends = 2
        // // console.log("Tên tôi là " + name + "tôi năm nay" + age + "Tôi đang học ở trường" + study + "Tôi có" + friends + "người bạn thân.")

        // // console.log(`Tên tôi là  ${name} tôi năm nay ${age} Tôi đang học ở trường ${study} Tôi có ${friends} người bạn thân.`)

        // // 4 hàm prompt("Lời dẫn") trong Js: cho phép ng dùng khai báo giá trị từ trình duyệt
        // // - Hàm alert("Lời dẫn") => thông báo ra ngoài trình duyệt
        // let input = prompt('Mời nhập tên ')
        // console.log('output: ' + input)


        // alert('Nguyễn Tấn Đạt')


        // // 5. Phép tính trong JS:
        // //phép tính cơ bản trong JS: + - * / **:mũ 
        // // let a = 10
        // // let b = 2

        
        // // let count = a ** b
        // // console.log('count = ' + count)







        //bt 1
        // let a = prompt('Mời nhập số a: ')
        // let b = prompt('Mời nhập số b: ')
        // let ab = a * b
        // console.log(ab)
        //bt 2
            // let input = prompt('Mời nhập số a: ')
            // let output = a * 2
            // console.log(output)

        //bt 3
            // let input_a = prompt('Mời nhập số a: ')
            // let input_b = prompt('Mời nhập số b: ')
            // let input_c = prompt('Mời nhập số c: ')
            // let output = (input_a - input_b) * input_c
            // console.log(output)
        //bt 4
            // let a = Number(prompt('Mời nhập số a: ') )
            // let b = Number(prompt('Mời nhập số b: '))
            // let output = a + b + a * b
            // console.log(output)
        //bt 5
            let A = Number(prompt('Mời nhập số a: '))
            let B = Number(prompt('Mời nhập số b: '))
            let C = Number(prompt('Mời nhập số c: '))
            let P = (A+B+C) /2
            let output = Math.sqrt((P-A)+(P-B)+(P-C))
            console.log(output)