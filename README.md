# Fetch-Useful
📌 Kod Açıklaması

    Veri Çekme (fetch)
        useEffect içinde fetch("https://restcountries.com/v3.1/all") ile ülke verileri çekiliyor.
        JSON formatına çevrilen veriler setCountries(data) ile countries state'ine kaydediliyor.

    FlatList Kullanımı
        data={countries} → FlatList, API'den gelen ülke verilerini alıyor.
        renderItem={({ item }) => (...)} → Her ülke için bir kart oluşturuluyor.

    TouchableOpacity ile Tıklanabilir Kartlar
        Kullanıcı bir ülkeye tıkladığında detaylara yönlendirilmesi için TouchableOpacity eklenmiş.
        Ancak onPress içinde navigation.navigate("Details", { country: item }) eklenmemiş. Eğer başka bir ekrana gitmek isteniyorsa, React Navigation ile yönlendirme eklenmeli.

    Görsel ve Stil Kullanımı
        Text ile ülke adı (item.name.common) ve başkent (item.capital) gösteriliyor.
        Image içinde source={{ uri: item.flags.png }} ile ülke bayrağı ekleniyor.
        StyleSheet ile güzel bir görüntü sağlanıyor.

🛠 Hata & İyileştirme Önerileri

🔴 Hata: keyExtractor={(item) => item.id}
✅ Çözüm: API'deki verilerde id yok. Bunun yerine "cca3" kullanılmalı:

keyExtractor={(item) => item.cca3}

🔴 Hata: item.capital bazı ülkelerde eksik olabilir.
✅ Çözüm: ?. operatörü kullanarak kontrol edilebilir:

<Text style={styles.capital}>{item.capital?.[0] || "Bilinmiyor"}</Text>

🔴 Hata: TouchableOpacity içinde onPress tanımlanmamış.
✅ Çözüm: Eğer detay sayfasına gidilecekse:

onPress={() => navigation.navigate("Details", { country: item })}

Bunun için react-navigation paketi kurulmalı.

Bu açıklamayı GitHub'daki README'ye veya kodun içine yorum olarak ekleyebilirsin! 🚀

﻿# Ekran Goruntu
 
![Image](https://github.com/user-attachments/assets/4c63cd7e-a995-461f-8a82-dc57ee325788)
