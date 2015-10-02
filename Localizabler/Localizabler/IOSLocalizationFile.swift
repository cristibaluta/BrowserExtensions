//
//  IOSLocalizationFile.swift
//  Localizabler
//
//  Created by Cristian Baluta on 02/10/15.
//  Copyright © 2015 Cristian Baluta. All rights reserved.
//

import Foundation

class IOSLocalizationFile: NSObject, LocalizationFile {

    private var content: String = ""
    private var terms = [String]()
    
    func initWithURL(url: NSURL) {
        
    }
    
    func allTerms() -> [String] {
        func processFile(filename: String) throws {

        }
        return terms
    }
    
    func translationForTerm(term: String) -> String {
        return ""
    }
    
    func updateTranslationForTerm(term: String, newValue: String) {
        
    }
}
