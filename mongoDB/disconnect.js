const mongoose = require("mongoose");

const { Schema, connect, model } = mongoose;
let con = null;
//IIEF
(async () => {
    try {
        con = await connect("mongodb://localhost/real", {
            useNewUrlParser: true
        });

        const userSchema = new Schema({
            name: String,
            email: { type: String, required: true, unique: true },
            nickname: String
        });

        const User = model("User", userSchema); // User 콜렉션에 userSchema형식에 데이터 넣을거임.

        const user1 = new User({
            name: "ksw",
            email: "kk@email.com",
            nickname: "nick kkk"
        });
        const user2 = new User({
            name: "lee",
            email: "lee@email.com",
            nickname: "mongo"
        });
        //C
        const res1 = await user1.save();
        const res2 = await user2.save();
        console.log("결과", res1, res2);

        //R
        const users = await User.find();  //DB read

        //U     
        const updated = await User.updateOne({ _id: users[1]._id }, { nickname: "변경됨" });
        console.log("업데이트 결과", updated);

        //D  
        const deleted = await User.deleteOne({ _id: users[0]._id });

        //==
        const afterUsers = await User.find();  //DB read
        console.log("최종", afterUsers)
    } catch (error) {
        console.error(error);
    } finally { // 마지막 작업
        if (con) con.disconnect();
    }
})();