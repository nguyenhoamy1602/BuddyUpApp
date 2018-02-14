//
//  LoginViewController.swift
//  BuddyUpApp
//
//  Created by Gabrielle Chandrasaputra on 14/2/18.
//  Copyright © 2018 Arizec. All rights reserved.
//

import UIKit
import Firebase

class LoginViewController: UIViewController {

    @IBOutlet weak var email: UITextField!
    @IBOutlet weak var password: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func login(_ sender: Any) {
        
            Auth.auth().signIn(withEmail: email.text!, password: password.text!) { (user, error) in
                // ...
                print(self.email.text! + " " + self.password.text!)
                if error != nil{//login error
                    let alert = UIAlertController(title: "Unable to login", message: "Email/password combination is incorrect", preferredStyle: UIAlertControllerStyle.alert)
                    alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
                    self.present(alert, animated: true, completion: nil)
                  
                }else{//successful ogin
                    
                    print("success")
                    self.performSegue(withIdentifier: "goToHomepage", sender: self)
                    
                }
            }
    }
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
