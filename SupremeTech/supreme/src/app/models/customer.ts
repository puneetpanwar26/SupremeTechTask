export class Customer {
    userId: number =0;
    firstName: string='';
    lastName: string='';
    moblieNo: string='';
    emailId: string='';
    pwd: string='';
    userTypeId: string='';
    createDate: Date=new Date();
    updateDate: Date=new Date();
    isActive:string='';
}
export class CustomerResponse{
    data: Customer[] = [];
    statusCode:number=0;
    message:string='';
    success:boolean=false;
}
