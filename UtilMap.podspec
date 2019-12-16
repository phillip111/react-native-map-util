require 'json'

Pod::Spec.new do |s|
  # NPM package specification
  package = JSON.parse(File.read(File.join(File.dirname(__FILE__), 'package.json')))

  s.name           = 'UtilMap'
  s.version        = package['version']
  s.license        = 'MIT'
  s.summary        = 'Audio recorder library for React Native'
  s.author         = { 'phillip' => '534394926@qq.com' }
  s.homepage       = "https://github.com/phillip111/react-native-map-util"
  s.source         = { :git => 'https://github.com/phillip111/react-native-map-util.git', :tag => "v#{s.version}"}
  s.platform       = :ios, '8.0'
  s.preserve_paths = '*.js'

  s.dependency 'React'

  s.source_files = 'ios/UtilMap.{h,m}'
end

