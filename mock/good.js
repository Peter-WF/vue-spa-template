/**
 * @authors       Peter 王斐
 * @email         wangfeia@zbj.com
 * @date          2016-12-27 17:18
 * @description
 */


module.exports = {
    api: '/api/getGoods',
    response: function (req, res) {
        res.send({
            success: true,
            data: {
                products: [
                    {
                        id: "1",
                        inventory: 10
                    },
                    {
                        id: "2",
                        inventory: 20
                    }
                ]
            }
        })
        ;
    }
}