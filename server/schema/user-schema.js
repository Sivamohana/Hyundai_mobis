import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';


const userSchema = mongoose.Schema({

        order : String,
        PI :String,
        activity:String,

        study:String,
        Quotation :String,
        Approval:String,
        PR:String,
        PO:String,
        Design:String,
        DesignConfirm :String,
        Sample:String,
        SampleConfirm:String,
        Manufacturing:String,
        Installation:String,
        Invoice:String,

        Astudy:String,
        AQuotation :String,
        AApproval:String,
        APR:String,
        APO:String,
        ADesign:String,
        ADesignConfirm :String,
        ASample:String,
        ASampleConfirm:String,
        AManufacturing:String,
        AInstallation:String,
        AInvoice:String,

        Dstudy:String,
        DQuotation :String,
        DApproval:String,
        DPR:String,
        DPO:String,
        DDesign:String,
        DDesignConfirm :String,
        DSample:String,
        DSampleConfirm:String,
        DManufacturing:String,
        DInstallation:String,
        DInvoice:String,

});

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const user =mongoose.model('user',userSchema);

export default user;