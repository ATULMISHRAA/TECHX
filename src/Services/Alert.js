import Swal from "sweetalert2";

class Alert {
    constructor(props){
    }

    success(message) {
        Swal.fire({
            title: "Success",
            icon: "success",
            text: message,
            confirmButtonColor: '#3085d6',
        });
    }
    
    error(message) {
        Swal.fire({
            title: "Oops...",
            icon: "error",
            text: message,
        });
    }
    
    warning(message) {
        return Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            text: message,
            buttons: true,
            showCancelButton:true,
            allowOutsideClick: false,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        });
    }
    wallet_amount_input(wtitle, wtxt, wallet_type) {
        return Swal.fire({
            title: wtitle,
            text: wtxt,
            input: "text",
            inputPlaceholder: "Write amount here...",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Yes, add it!",
            confirmButtonColor: "#3085d6",
            allowOutsideClick: false,
            cancelButtonText: "No, cancel!!",
            cancelButtonColor: "#FF0202",
            showLoaderOnConfirm: true,
            preConfirm: (amount) => {
                if (!amount) {
                    Swal.showValidationMessage(
                        "Please enter a amount."
                    )
                } else if (isNaN( parseInt(amount) )) {
                    Swal.showValidationMessage(
                        "Please enter a valid amount."
                    )
                } else if (parseInt(amount) <= 0) {
                    Swal.showValidationMessage(
                        "Please enter a greter then 0 amount."
                    )
                }
            },
            // allowOutsideClick: () => !Swal.isLoading()
        })
    }

    wallet_deduct_amount_input(wtitle, wtxt, wallet_type, wamount) {
        return Swal.fire({
            title: wtitle,
            text: wtxt,
            input: "text",
            inputPlaceholder: "Write amount here...",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Yes, deduct it!",
            confirmButtonColor: "#3085d6",
            allowOutsideClick: false,
            cancelButtonText: "No, cancel!!",
            cancelButtonColor: "#FF0202",
            showLoaderOnConfirm: true,
            preConfirm: (amount) => {
                if (!amount) {
                    Swal.showValidationMessage(
                        "Please enter a amount."
                    )
                } else if (isNaN( parseInt(amount) )) {
                    Swal.showValidationMessage(
                        "Please enter a valid amount."
                    )
                } else if (wamount == 0) {
                    Swal.showValidationMessage(
                        "Insufficient amount in wallet."
                    )
                } else if (parseInt(amount) > parseFloat(wamount)) {
                    Swal.showValidationMessage(
                        "Please enter a equal or less then "+wamount+" amount."
                    )
                } 
                // else if(wallet_type==1 && (parseFloat(wamount)-parseInt(amount)) <= 100){
                //     Swal.showValidationMessage(
                //         "Need to maintain 500 winning wallet amount"
                //     ) 
                // }
            },
            // allowOutsideClick: () => !Swal.isLoading()
        })
    }
    confirmResultDeclare(message) {
        return Swal.fire({
            title: "Are you sure you want publish result?",
            icon: "warning",
            text: message,
            buttons: true,
            showCancelButton: true,
            allowOutsideClick: false,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        });
    }
}
export default new Alert();