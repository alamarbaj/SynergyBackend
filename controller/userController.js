
exports.listUser = async (req, res) => {
    try {
        const result = await UserSchema.find().sort({ _id: -1 })
        res.json({
            status: true,
            data: result,
            message: "User List fetch successfully....."
        })

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}
exports.addUser = async (req, res) => {
    try {
        console.log(req.body);
        const body = req.body
        const obj = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: body.password,
            mobile: body.mobile,
            city: body.city,
            address: body.address
        }
        const result = await UserSchema.create(obj);
        res.json({
            status: true,
            data: result,
            message: "User Added Successfully....."
        })


    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })



    }

}


exports.getById = async (req, res) => {
    try {
        const _id = req.params._id;
        const result = await UserSchema.findOne({ _id });

        res.json({
            status: true,
            data: result,
            message: "User fetch successfully....."
        })

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
}

exports.userUpdate = async (req, res) => {
    try {
        const _id = req.body._id
        const body = req.body
        const obj = {
            firstname: body.firstname,
            lastname: body.lastname,
            email: body.email,
            password: body.password,
            mobile: body.mobile,
            city: body.city,
            address: body.address
        }
        const result = await UserSchema.updateOne({ _id }, { $set: obj });
        res.json({
            status: true,
            data: result,
            message: "User Update SuccessFully....."
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

exports.userDelete = async (req, res) => {
    try {
        const _id = req.params._id
        const result = await UserSchema.remove({ _id })

        res.json({
            status: true,
            data: result,
            message: "User Delete Successfully....."
        })

    } catch (error) {

        res.json({
            status: false,
            data: [],
            message: error.message
        })

    }
},
    exports.changeUserPassword = async (req, res) => {
        try {
            const _id = req.params._id
            const body = req.body
            const { password } = await UserSchema.findOne({ _id })
            if (password == body.oldpassword) {
                let obj = {
                    password: body.newpassword
                }
                const result = await UserSchema.updateOne({ _id }, { $set: obj });

                res.json({
                    status: true,
                    data: result,
                    message: "User Update SuccessFully....."
                })
            }
            else {
                res.json({
                    status: false,
                    data: [],
                    message: "old Password is not match!!!!"
                })
            }
        } catch (error) {
            res.json({
                status: false,
                data: [],
                message: error.message
            })
        }
    }

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        var result = await UserSchema.findOne({ email: email,password : password });
        if (!result) {
            res.json({
                status: false,
                data: [],
                message: "Email and Password not matched....."
            })
        }
        else {
            res.json({
                status: true,
                data: result,
                message: "Login SuccessFully....."
            })
        }

    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}