// require('UILabel,UIColor,UIView');
defineClass('HomeVC',{
	
tableView_numberOfRowsInSection: function(tableView, section) {
    if (1 == section) {
        if (self.doctorArray().count() > 3) {
            return 3;
        }
        return self.doctorArray().count();
    } else {
        if (self.healthyArray().count() > 3) {
            return 3;
        }
        return self.healthyArray().count();
    }
}

}
)
