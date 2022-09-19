import ZooKeeper from "../Employees/ZooKeeper";
import ZooKeeperHireValidator from "./ZooKeeperHireValidator";
import VeterinarianHireValidator from "./VeterinarianHireValidator";

export default class HireValidatorProvider {
  static ProvideEmployee = (employee, zoo) => {
    let errors;
    if (employee instanceof ZooKeeper) {
      errors = ZooKeeperHireValidator.ValidateEmployee(employee, zoo);
    } else {
      errors = VeterinarianHireValidator.ValidateEmployee(employee, zoo);
    }

    return errors.length == 0;
  };
}
